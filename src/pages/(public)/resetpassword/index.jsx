import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSearchParams } from 'react-router-dom'
import * as yup from 'yup'

import { useToast } from '@hooks/use-toast'
import { Input } from '@components/ui/input'
import { Button } from '@components/ui/button'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'

import { useUserStore } from '@stores/auth'

const schema = yup
  .object({
    code: yup.string().required('Veuillez entrer la clé'),
    password: yup.string().required('Veuillez entrer un mot de passe'),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        'Les mots de passe doivent être équivalent',
      ),
  })
  .required()

export default function ResetPassword() {
  const resetPassword = useUserStore.use.resetPassword()
  const { toast } = useToast()
  let [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      code: code || '',
      password: '',
      passwordConfirmation: '',
    },
  })

  const onSubmit = useMemo(() => {
    return async (data) => {
      const response = await resetPassword(data)
      if (response.jwt) {
        toast({
          title: 'Mot de passe réinitialisé',
          description: 'Votre mot de passe a bien été réinitialisé',
          variant: 'success',
        })
      } else {
        toast({
          title: 'Erreur',
          description:
            'Une erreur est survenue pendant la réinitialisation, veuillez réessayer',
          variant: 'destructive',
        })
      }
    }
  }, [resetPassword, toast])

  console.log('init reset password')

  return (
    <Card className="w-2/3">
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmer le mot de passe</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem hidden>
                  <FormControl>
                    <Input type="hidden" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code"
              render={() => <FormMessage />}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={form.handleSubmit(onSubmit)}>
          Modifier mon mot de passe
        </Button>
      </CardFooter>
    </Card>
  )
}
