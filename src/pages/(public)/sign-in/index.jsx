import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

import { useToast } from '@hooks/use-toast'

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
    password: yup
      .string()
      .required('Veuillez entrer un mot de passe')
      .min(8, 'Le mot de passe est trop court (8 caractères minimums)'),
    // .matches(/[a-zA-Z]/, 'Le mot de passe ne peut contenir que des lettres'),
  })
  .required()

export default function SignIn() {
  const login = useUserStore.use.login()
  const { toast } = useToast()

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
      if (response.jwt) {
        toast({
          title: 'Welcome back !',
          variant: 'success',
        })
      } else {
        toast({
          description: response.error.message,
          title: 'Erreur',
          variant: 'destructive',
        })
      }
    }
  }, [login, toast])

  console.log('init sign in')

  return (
    <Card className="w-2/3">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>
          Entrez votre email pour créer votre compte
        </CardDescription>
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
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link to="/sign-up">S'inscrire</Link>
        </Button>
        <Button onClick={form.handleSubmit(onSubmit)}>Se connecter</Button>
      </CardFooter>
    </Card>
  )
}
