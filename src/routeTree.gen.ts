/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ErrorImport } from './routes/error'
import { Route as IndexImport } from './routes/index'
import { Route as AuthSignupImport } from './routes/auth/signup'
import { Route as AuthResetpasswordImport } from './routes/auth/resetpassword'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as AuthForgetPasswordImport } from './routes/auth/ForgetPassword'
import { Route as StudioPostIdIndexImport } from './routes/studio/$postId/index'
import { Route as StudioPostIdEditImport } from './routes/studio/$postId/edit'

// Create/Update Routes

const ErrorRoute = ErrorImport.update({
  path: '/error',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  path: '/auth/signup',
  getParentRoute: () => rootRoute,
} as any)

const AuthResetpasswordRoute = AuthResetpasswordImport.update({
  path: '/auth/resetpassword',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthForgetPasswordRoute = AuthForgetPasswordImport.update({
  path: '/auth/ForgetPassword',
  getParentRoute: () => rootRoute,
} as any)

const StudioPostIdIndexRoute = StudioPostIdIndexImport.update({
  path: '/studio/$postId/',
  getParentRoute: () => rootRoute,
} as any)

const StudioPostIdEditRoute = StudioPostIdEditImport.update({
  path: '/studio/$postId/edit',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/error': {
      preLoaderRoute: typeof ErrorImport
      parentRoute: typeof rootRoute
    }
    '/auth/ForgetPassword': {
      preLoaderRoute: typeof AuthForgetPasswordImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/auth/resetpassword': {
      preLoaderRoute: typeof AuthResetpasswordImport
      parentRoute: typeof rootRoute
    }
    '/auth/signup': {
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof rootRoute
    }
    '/studio/$postId/edit': {
      preLoaderRoute: typeof StudioPostIdEditImport
      parentRoute: typeof rootRoute
    }
    '/studio/$postId/': {
      preLoaderRoute: typeof StudioPostIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ErrorRoute,
  AuthForgetPasswordRoute,
  AuthLoginRoute,
  AuthResetpasswordRoute,
  AuthSignupRoute,
  StudioPostIdEditRoute,
  StudioPostIdIndexRoute,
])

/* prettier-ignore-end */
