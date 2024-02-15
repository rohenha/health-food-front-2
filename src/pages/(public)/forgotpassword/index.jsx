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
    <>
      <Link
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8"
        to="/sign-in"
      >
        Se connecter
      </Link>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Mot de passe oublié
        </h1>
        <p className="text-sm text-muted-foreground">
          Entrez votre email pour recevoir un email pour réinitialiser votre mot
          de passe
        </p>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="grid gap-1">
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
              </div>
              <Button>Réinitialiser mon mot de passe</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}
