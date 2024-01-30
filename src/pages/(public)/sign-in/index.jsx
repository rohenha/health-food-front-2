import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// import Button from '@components/atoms/Button'
import { Input } from '@components/ui/input'
import { Button } from '@components/ui/button'
import { Switch } from '@components/ui/switch'

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

import './index.scss'

const schema = yup
  .object({
    identifier: yup.string().required("Vous devez remplir l'identifiant"),
    password: yup.string().required('Veuillez entrer un mot de passe'),
  })
  .required()

export default function SignIn() {
  const login = useUserStore.use.login()

  const form = useForm({
    resolver: yupResolver(schema),
    // mode: 'onTouched',
    defaultValues: {
      identifier: '',
      password: '',
      remember: false,
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

  console.log('init sign in')

  return (
    <Card className="w-2/3">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Card Description</CardDescription>
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
              name="remember"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Se souvenir de moi</FormLabel>
                  </div>
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
        <Button variant="outline">S'inscrire</Button>
        <Button>Se connecter</Button>
      </CardFooter>
    </Card>

    // <div className="t-signIn">
    //   <div className="row">
    //     <div className="column-16 offset-4 md-column-12 md-offset-6">
    //       <h1>Sign In</h1>
    //     </div>
    //   </div>
    // </div>
  )
}
