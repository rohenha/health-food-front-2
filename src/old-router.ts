// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/account`
  | `/account/edit`
  | `/dashboard`
  | `/forgotpassword`
  | `/planning`
  | `/planning/create`
  | `/planning/shopping-list`
  | `/recipes`
  | `/recipes/:id`
  | `/recipes/:id/edit`
  | `/resetpassword`
  | `/sign-in`
  | `/sign-up`

export type Params = {
  '/recipes/:id': { id: string }
  '/recipes/:id/edit': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>()
export const { redirect } = utils<Path, Params>()
