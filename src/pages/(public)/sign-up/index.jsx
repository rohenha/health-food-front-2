import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

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
    name: yup.string().required('Vous devez remplir le nom'),
    email: yup
      .string()
      .email("L'email doit être valide")
      .required("Vous devez remplir l'email"),
    password: yup
      .string()
      .required('Veuillez entrer un mot de passe')
      .min(8, 'Le mot de passe est trop court (8 caractères minimums)'),
    // .matches(/[a-zA-Z]/, 'Le mot de passe ne peut contenir que des lettres'),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        'Les mots de passe doivent être équivalent',
      ),
  })
  .required()

export default function SignUp() {
  const signUp = useUserStore.use.signUp()
  const { toast } = useToast()

  const form = useForm({
    resolver: yupResolver(schema),
    // mode: 'onTouched',
    defaultValues: {
      email: '',
      name: '',
      username: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  const onSubmit = useMemo(() => {
    return async (data) => {
      console.log('submit')
      const response = await signUp(data)
      if (response.jwt) {
        toast({
          title: 'Welcome !',
          description: 'Bienvenue chez nous, découvrez notre application',
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
  }, [signUp, toast])

  console.log('init sign up')

  return (
    <Card className="w-2/3">
      <CardHeader>
        <CardTitle>S'inscrire</CardTitle>
        <CardDescription>Card Description</CardDescription>
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
                    <Input
                      type="email"
                      placeholder="test@test.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Jean" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Identifiant</FormLabel>
                  <FormControl>
                    <Input placeholder="jean72" {...field} />
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
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link to="/sign-in">Se connecter</Link>
        </Button>
        <Button onClick={form.handleSubmit(onSubmit)}>S'inscrire</Button>
      </CardFooter>
    </Card>
  )
}
