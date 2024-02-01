import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { useToast } from '@hooks/use-toast'

import { Input } from '@components/ui/input'
import { Button } from '@components/ui/button'
import { ChevronLeft } from 'lucide-react'

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
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@components/ui/card'

import { useUserStore } from '@stores/auth'

const schema = yup
  .object({
    email: yup.string().required('Vous devez remplir votre email'),
  })
  .required()

export default function SignIn() {
  const forgotPassword = useUserStore.use.forgotPassword()
  const { toast } = useToast()

  const form = useForm({
    resolver: yupResolver(schema),
    // mode: 'onTouched',
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = useMemo(() => {
    return async (data) => {
      const sent = await forgotPassword(data)
      if (sent) {
        toast({
          title: 'Email envoyé',
          description:
            'Vérifiez votre boite mail pour réinitialiser votre mot de passe',
          variant: 'success',
        })
      } else {
        toast({
          title: 'Erreur',
          description:
            "Une erreur s'est produite lors de l'envoi du mail de réinitialisation",
          variant: 'destructive',
        })
      }
    }
  }, [forgotPassword, toast])

  console.log('init Forget')

  return (
    <Card className="w-2/3">
      <CardHeader>
        <CardTitle>Mot de passe oublié</CardTitle>
        <CardDescription>
          Entrez votre email pour recevoir un email pour réinitialiser votre mot
          de passe
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="test@test.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link to="/sign-up">
            <ChevronLeft className="mr-2 h-4 w-4" /> Retour
          </Link>
        </Button>
        <Button onClick={form.handleSubmit(onSubmit)}>Réinitialiser</Button>
      </CardFooter>
    </Card>
  )
}
