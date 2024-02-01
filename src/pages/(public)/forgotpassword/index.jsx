import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

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
} from '@components/ui/card'

import { useUserStore } from '@stores/auth'

const schema = yup
  .object({
    identifier: yup.string().required('Vous devez remplir votre email'),
  })
  .required()

export default function SignIn() {
  const login = useUserStore.use.login()

  const form = useForm({
    resolver: yupResolver(schema),
    // mode: 'onTouched',
    defaultValues: {
      identifier: '',
    },
  })

  const onSubmit = useMemo(() => {
    return async (data) => {
      const response = await login(data)
      console.log(response)
      if (!response.jwt) {
        form.setError('global', {
          type: 'manual',
          message: response.error.message,
        })
      }
    }
  }, [login, form])

  console.log('init Forget')

  return (
    <Card className="w-2/3">
      <CardHeader>
        <CardTitle>Mot de passe oublié</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email ou Username</FormLabel>
                  <FormControl>
                    <Input placeholder="test@test.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="global"
              render={() => <FormMessage />}
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
