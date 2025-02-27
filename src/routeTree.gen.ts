/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout.index'
import { Route as DashboardDashboardImport } from './routes/dashboard/_dashboard'
import { Route as LayoutPricingImport } from './routes/_layout.pricing'
import { Route as LayoutFeaturesImport } from './routes/_layout.features'
import { Route as LayoutDocsImport } from './routes/_layout.docs'
import { Route as LayoutDemoImport } from './routes/_layout.demo'
import { Route as LayoutBlogImport } from './routes/_layout.blog'
import { Route as LayoutAnalyticsImport } from './routes/_layout.analytics'
import { Route as LayoutAboutImport } from './routes/_layout.about'
import { Route as DashboardDashboardIndexImport } from './routes/dashboard/_dashboard/index'
import { Route as DashboardDashboardRafflesImport } from './routes/dashboard/_dashboard/raffles'
import { Route as DashboardDashboardCommunitiesImport } from './routes/dashboard/_dashboard/communities'
import { Route as DashboardDashboardAnalyticsImport } from './routes/dashboard/_dashboard/analytics'
import { Route as DashboardDashboardSettingsSettingsImport } from './routes/dashboard/_dashboard/settings/_settings'
import { Route as DashboardDashboardSettingsSettingsIndexImport } from './routes/dashboard/_dashboard/settings/_settings/index'
import { Route as DashboardDashboardSettingsSettingsSecurityImport } from './routes/dashboard/_dashboard/settings/_settings/security'
import { Route as DashboardDashboardSettingsSettingsNotificationsImport } from './routes/dashboard/_dashboard/settings/_settings/notifications'
import { Route as DashboardDashboardSettingsSettingsLanguageImport } from './routes/dashboard/_dashboard/settings/_settings/language'
import { Route as DashboardDashboardSettingsSettingsAppearanceImport } from './routes/dashboard/_dashboard/settings/_settings/appearance'
import { Route as DashboardDashboardSettingsSettingsAdvancedImport } from './routes/dashboard/_dashboard/settings/_settings/advanced'

// Create Virtual Routes

const DashboardImport = createFileRoute('/dashboard')()
const DashboardDashboardSettingsImport = createFileRoute(
  '/dashboard/_dashboard/settings',
)()

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const DashboardDashboardRoute = DashboardDashboardImport.update({
  id: '/_dashboard',
  getParentRoute: () => DashboardRoute,
} as any)

const LayoutPricingRoute = LayoutPricingImport.update({
  id: '/pricing',
  path: '/pricing',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutFeaturesRoute = LayoutFeaturesImport.update({
  id: '/features',
  path: '/features',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutDocsRoute = LayoutDocsImport.update({
  id: '/docs',
  path: '/docs',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutDemoRoute = LayoutDemoImport.update({
  id: '/demo',
  path: '/demo',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutBlogRoute = LayoutBlogImport.update({
  id: '/blog',
  path: '/blog',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAnalyticsRoute = LayoutAnalyticsImport.update({
  id: '/analytics',
  path: '/analytics',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAboutRoute = LayoutAboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => LayoutRoute,
} as any)

const DashboardDashboardSettingsRoute = DashboardDashboardSettingsImport.update(
  {
    id: '/settings',
    path: '/settings',
    getParentRoute: () => DashboardDashboardRoute,
  } as any,
)

const DashboardDashboardIndexRoute = DashboardDashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardDashboardRoute,
} as any)

const DashboardDashboardRafflesRoute = DashboardDashboardRafflesImport.update({
  id: '/raffles',
  path: '/raffles',
  getParentRoute: () => DashboardDashboardRoute,
} as any)

const DashboardDashboardCommunitiesRoute =
  DashboardDashboardCommunitiesImport.update({
    id: '/communities',
    path: '/communities',
    getParentRoute: () => DashboardDashboardRoute,
  } as any)

const DashboardDashboardAnalyticsRoute =
  DashboardDashboardAnalyticsImport.update({
    id: '/analytics',
    path: '/analytics',
    getParentRoute: () => DashboardDashboardRoute,
  } as any)

const DashboardDashboardSettingsSettingsRoute =
  DashboardDashboardSettingsSettingsImport.update({
    id: '/_settings',
    getParentRoute: () => DashboardDashboardSettingsRoute,
  } as any)

const DashboardDashboardSettingsSettingsIndexRoute =
  DashboardDashboardSettingsSettingsIndexImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => DashboardDashboardSettingsSettingsRoute,
  } as any)

const DashboardDashboardSettingsSettingsSecurityRoute =
  DashboardDashboardSettingsSettingsSecurityImport.update({
    id: '/security',
    path: '/security',
    getParentRoute: () => DashboardDashboardSettingsSettingsRoute,
  } as any)

const DashboardDashboardSettingsSettingsNotificationsRoute =
  DashboardDashboardSettingsSettingsNotificationsImport.update({
    id: '/notifications',
    path: '/notifications',
    getParentRoute: () => DashboardDashboardSettingsSettingsRoute,
  } as any)

const DashboardDashboardSettingsSettingsLanguageRoute =
  DashboardDashboardSettingsSettingsLanguageImport.update({
    id: '/language',
    path: '/language',
    getParentRoute: () => DashboardDashboardSettingsSettingsRoute,
  } as any)

const DashboardDashboardSettingsSettingsAppearanceRoute =
  DashboardDashboardSettingsSettingsAppearanceImport.update({
    id: '/appearance',
    path: '/appearance',
    getParentRoute: () => DashboardDashboardSettingsSettingsRoute,
  } as any)

const DashboardDashboardSettingsSettingsAdvancedRoute =
  DashboardDashboardSettingsSettingsAdvancedImport.update({
    id: '/advanced',
    path: '/advanced',
    getParentRoute: () => DashboardDashboardSettingsSettingsRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/about': {
      id: '/_layout/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof LayoutAboutImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/analytics': {
      id: '/_layout/analytics'
      path: '/analytics'
      fullPath: '/analytics'
      preLoaderRoute: typeof LayoutAnalyticsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/blog': {
      id: '/_layout/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof LayoutBlogImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/demo': {
      id: '/_layout/demo'
      path: '/demo'
      fullPath: '/demo'
      preLoaderRoute: typeof LayoutDemoImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/docs': {
      id: '/_layout/docs'
      path: '/docs'
      fullPath: '/docs'
      preLoaderRoute: typeof LayoutDocsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/features': {
      id: '/_layout/features'
      path: '/features'
      fullPath: '/features'
      preLoaderRoute: typeof LayoutFeaturesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/pricing': {
      id: '/_layout/pricing'
      path: '/pricing'
      fullPath: '/pricing'
      preLoaderRoute: typeof LayoutPricingImport
      parentRoute: typeof LayoutImport
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/_dashboard': {
      id: '/dashboard/_dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardDashboardImport
      parentRoute: typeof DashboardRoute
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/dashboard/_dashboard/analytics': {
      id: '/dashboard/_dashboard/analytics'
      path: '/analytics'
      fullPath: '/dashboard/analytics'
      preLoaderRoute: typeof DashboardDashboardAnalyticsImport
      parentRoute: typeof DashboardDashboardImport
    }
    '/dashboard/_dashboard/communities': {
      id: '/dashboard/_dashboard/communities'
      path: '/communities'
      fullPath: '/dashboard/communities'
      preLoaderRoute: typeof DashboardDashboardCommunitiesImport
      parentRoute: typeof DashboardDashboardImport
    }
    '/dashboard/_dashboard/raffles': {
      id: '/dashboard/_dashboard/raffles'
      path: '/raffles'
      fullPath: '/dashboard/raffles'
      preLoaderRoute: typeof DashboardDashboardRafflesImport
      parentRoute: typeof DashboardDashboardImport
    }
    '/dashboard/_dashboard/': {
      id: '/dashboard/_dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardDashboardIndexImport
      parentRoute: typeof DashboardDashboardImport
    }
    '/dashboard/_dashboard/settings': {
      id: '/dashboard/_dashboard/settings'
      path: '/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof DashboardDashboardSettingsImport
      parentRoute: typeof DashboardDashboardImport
    }
    '/dashboard/_dashboard/settings/_settings': {
      id: '/dashboard/_dashboard/settings/_settings'
      path: '/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof DashboardDashboardSettingsSettingsImport
      parentRoute: typeof DashboardDashboardSettingsRoute
    }
    '/dashboard/_dashboard/settings/_settings/advanced': {
      id: '/dashboard/_dashboard/settings/_settings/advanced'
      path: '/advanced'
      fullPath: '/dashboard/settings/advanced'
      preLoaderRoute: typeof DashboardDashboardSettingsSettingsAdvancedImport
      parentRoute: typeof DashboardDashboardSettingsSettingsImport
    }
    '/dashboard/_dashboard/settings/_settings/appearance': {
      id: '/dashboard/_dashboard/settings/_settings/appearance'
      path: '/appearance'
      fullPath: '/dashboard/settings/appearance'
      preLoaderRoute: typeof DashboardDashboardSettingsSettingsAppearanceImport
      parentRoute: typeof DashboardDashboardSettingsSettingsImport
    }
    '/dashboard/_dashboard/settings/_settings/language': {
      id: '/dashboard/_dashboard/settings/_settings/language'
      path: '/language'
      fullPath: '/dashboard/settings/language'
      preLoaderRoute: typeof DashboardDashboardSettingsSettingsLanguageImport
      parentRoute: typeof DashboardDashboardSettingsSettingsImport
    }
    '/dashboard/_dashboard/settings/_settings/notifications': {
      id: '/dashboard/_dashboard/settings/_settings/notifications'
      path: '/notifications'
      fullPath: '/dashboard/settings/notifications'
      preLoaderRoute: typeof DashboardDashboardSettingsSettingsNotificationsImport
      parentRoute: typeof DashboardDashboardSettingsSettingsImport
    }
    '/dashboard/_dashboard/settings/_settings/security': {
      id: '/dashboard/_dashboard/settings/_settings/security'
      path: '/security'
      fullPath: '/dashboard/settings/security'
      preLoaderRoute: typeof DashboardDashboardSettingsSettingsSecurityImport
      parentRoute: typeof DashboardDashboardSettingsSettingsImport
    }
    '/dashboard/_dashboard/settings/_settings/': {
      id: '/dashboard/_dashboard/settings/_settings/'
      path: '/'
      fullPath: '/dashboard/settings/'
      preLoaderRoute: typeof DashboardDashboardSettingsSettingsIndexImport
      parentRoute: typeof DashboardDashboardSettingsSettingsImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutAboutRoute: typeof LayoutAboutRoute
  LayoutAnalyticsRoute: typeof LayoutAnalyticsRoute
  LayoutBlogRoute: typeof LayoutBlogRoute
  LayoutDemoRoute: typeof LayoutDemoRoute
  LayoutDocsRoute: typeof LayoutDocsRoute
  LayoutFeaturesRoute: typeof LayoutFeaturesRoute
  LayoutPricingRoute: typeof LayoutPricingRoute
  LayoutIndexRoute: typeof LayoutIndexRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutAboutRoute: LayoutAboutRoute,
  LayoutAnalyticsRoute: LayoutAnalyticsRoute,
  LayoutBlogRoute: LayoutBlogRoute,
  LayoutDemoRoute: LayoutDemoRoute,
  LayoutDocsRoute: LayoutDocsRoute,
  LayoutFeaturesRoute: LayoutFeaturesRoute,
  LayoutPricingRoute: LayoutPricingRoute,
  LayoutIndexRoute: LayoutIndexRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

interface DashboardDashboardSettingsSettingsRouteChildren {
  DashboardDashboardSettingsSettingsAdvancedRoute: typeof DashboardDashboardSettingsSettingsAdvancedRoute
  DashboardDashboardSettingsSettingsAppearanceRoute: typeof DashboardDashboardSettingsSettingsAppearanceRoute
  DashboardDashboardSettingsSettingsLanguageRoute: typeof DashboardDashboardSettingsSettingsLanguageRoute
  DashboardDashboardSettingsSettingsNotificationsRoute: typeof DashboardDashboardSettingsSettingsNotificationsRoute
  DashboardDashboardSettingsSettingsSecurityRoute: typeof DashboardDashboardSettingsSettingsSecurityRoute
  DashboardDashboardSettingsSettingsIndexRoute: typeof DashboardDashboardSettingsSettingsIndexRoute
}

const DashboardDashboardSettingsSettingsRouteChildren: DashboardDashboardSettingsSettingsRouteChildren =
  {
    DashboardDashboardSettingsSettingsAdvancedRoute:
      DashboardDashboardSettingsSettingsAdvancedRoute,
    DashboardDashboardSettingsSettingsAppearanceRoute:
      DashboardDashboardSettingsSettingsAppearanceRoute,
    DashboardDashboardSettingsSettingsLanguageRoute:
      DashboardDashboardSettingsSettingsLanguageRoute,
    DashboardDashboardSettingsSettingsNotificationsRoute:
      DashboardDashboardSettingsSettingsNotificationsRoute,
    DashboardDashboardSettingsSettingsSecurityRoute:
      DashboardDashboardSettingsSettingsSecurityRoute,
    DashboardDashboardSettingsSettingsIndexRoute:
      DashboardDashboardSettingsSettingsIndexRoute,
  }

const DashboardDashboardSettingsSettingsRouteWithChildren =
  DashboardDashboardSettingsSettingsRoute._addFileChildren(
    DashboardDashboardSettingsSettingsRouteChildren,
  )

interface DashboardDashboardSettingsRouteChildren {
  DashboardDashboardSettingsSettingsRoute: typeof DashboardDashboardSettingsSettingsRouteWithChildren
}

const DashboardDashboardSettingsRouteChildren: DashboardDashboardSettingsRouteChildren =
  {
    DashboardDashboardSettingsSettingsRoute:
      DashboardDashboardSettingsSettingsRouteWithChildren,
  }

const DashboardDashboardSettingsRouteWithChildren =
  DashboardDashboardSettingsRoute._addFileChildren(
    DashboardDashboardSettingsRouteChildren,
  )

interface DashboardDashboardRouteChildren {
  DashboardDashboardAnalyticsRoute: typeof DashboardDashboardAnalyticsRoute
  DashboardDashboardCommunitiesRoute: typeof DashboardDashboardCommunitiesRoute
  DashboardDashboardRafflesRoute: typeof DashboardDashboardRafflesRoute
  DashboardDashboardIndexRoute: typeof DashboardDashboardIndexRoute
  DashboardDashboardSettingsRoute: typeof DashboardDashboardSettingsRouteWithChildren
}

const DashboardDashboardRouteChildren: DashboardDashboardRouteChildren = {
  DashboardDashboardAnalyticsRoute: DashboardDashboardAnalyticsRoute,
  DashboardDashboardCommunitiesRoute: DashboardDashboardCommunitiesRoute,
  DashboardDashboardRafflesRoute: DashboardDashboardRafflesRoute,
  DashboardDashboardIndexRoute: DashboardDashboardIndexRoute,
  DashboardDashboardSettingsRoute: DashboardDashboardSettingsRouteWithChildren,
}

const DashboardDashboardRouteWithChildren =
  DashboardDashboardRoute._addFileChildren(DashboardDashboardRouteChildren)

interface DashboardRouteChildren {
  DashboardDashboardRoute: typeof DashboardDashboardRouteWithChildren
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardDashboardRoute: DashboardDashboardRouteWithChildren,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/about': typeof LayoutAboutRoute
  '/analytics': typeof LayoutAnalyticsRoute
  '/blog': typeof LayoutBlogRoute
  '/demo': typeof LayoutDemoRoute
  '/docs': typeof LayoutDocsRoute
  '/features': typeof LayoutFeaturesRoute
  '/pricing': typeof LayoutPricingRoute
  '/dashboard': typeof DashboardDashboardRouteWithChildren
  '/': typeof LayoutIndexRoute
  '/dashboard/analytics': typeof DashboardDashboardAnalyticsRoute
  '/dashboard/communities': typeof DashboardDashboardCommunitiesRoute
  '/dashboard/raffles': typeof DashboardDashboardRafflesRoute
  '/dashboard/': typeof DashboardDashboardIndexRoute
  '/dashboard/settings': typeof DashboardDashboardSettingsSettingsRouteWithChildren
  '/dashboard/settings/advanced': typeof DashboardDashboardSettingsSettingsAdvancedRoute
  '/dashboard/settings/appearance': typeof DashboardDashboardSettingsSettingsAppearanceRoute
  '/dashboard/settings/language': typeof DashboardDashboardSettingsSettingsLanguageRoute
  '/dashboard/settings/notifications': typeof DashboardDashboardSettingsSettingsNotificationsRoute
  '/dashboard/settings/security': typeof DashboardDashboardSettingsSettingsSecurityRoute
  '/dashboard/settings/': typeof DashboardDashboardSettingsSettingsIndexRoute
}

export interface FileRoutesByTo {
  '/about': typeof LayoutAboutRoute
  '/analytics': typeof LayoutAnalyticsRoute
  '/blog': typeof LayoutBlogRoute
  '/demo': typeof LayoutDemoRoute
  '/docs': typeof LayoutDocsRoute
  '/features': typeof LayoutFeaturesRoute
  '/pricing': typeof LayoutPricingRoute
  '/dashboard': typeof DashboardDashboardIndexRoute
  '/': typeof LayoutIndexRoute
  '/dashboard/analytics': typeof DashboardDashboardAnalyticsRoute
  '/dashboard/communities': typeof DashboardDashboardCommunitiesRoute
  '/dashboard/raffles': typeof DashboardDashboardRafflesRoute
  '/dashboard/settings': typeof DashboardDashboardSettingsSettingsIndexRoute
  '/dashboard/settings/advanced': typeof DashboardDashboardSettingsSettingsAdvancedRoute
  '/dashboard/settings/appearance': typeof DashboardDashboardSettingsSettingsAppearanceRoute
  '/dashboard/settings/language': typeof DashboardDashboardSettingsSettingsLanguageRoute
  '/dashboard/settings/notifications': typeof DashboardDashboardSettingsSettingsNotificationsRoute
  '/dashboard/settings/security': typeof DashboardDashboardSettingsSettingsSecurityRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/about': typeof LayoutAboutRoute
  '/_layout/analytics': typeof LayoutAnalyticsRoute
  '/_layout/blog': typeof LayoutBlogRoute
  '/_layout/demo': typeof LayoutDemoRoute
  '/_layout/docs': typeof LayoutDocsRoute
  '/_layout/features': typeof LayoutFeaturesRoute
  '/_layout/pricing': typeof LayoutPricingRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/dashboard/_dashboard': typeof DashboardDashboardRouteWithChildren
  '/_layout/': typeof LayoutIndexRoute
  '/dashboard/_dashboard/analytics': typeof DashboardDashboardAnalyticsRoute
  '/dashboard/_dashboard/communities': typeof DashboardDashboardCommunitiesRoute
  '/dashboard/_dashboard/raffles': typeof DashboardDashboardRafflesRoute
  '/dashboard/_dashboard/': typeof DashboardDashboardIndexRoute
  '/dashboard/_dashboard/settings': typeof DashboardDashboardSettingsRouteWithChildren
  '/dashboard/_dashboard/settings/_settings': typeof DashboardDashboardSettingsSettingsRouteWithChildren
  '/dashboard/_dashboard/settings/_settings/advanced': typeof DashboardDashboardSettingsSettingsAdvancedRoute
  '/dashboard/_dashboard/settings/_settings/appearance': typeof DashboardDashboardSettingsSettingsAppearanceRoute
  '/dashboard/_dashboard/settings/_settings/language': typeof DashboardDashboardSettingsSettingsLanguageRoute
  '/dashboard/_dashboard/settings/_settings/notifications': typeof DashboardDashboardSettingsSettingsNotificationsRoute
  '/dashboard/_dashboard/settings/_settings/security': typeof DashboardDashboardSettingsSettingsSecurityRoute
  '/dashboard/_dashboard/settings/_settings/': typeof DashboardDashboardSettingsSettingsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/about'
    | '/analytics'
    | '/blog'
    | '/demo'
    | '/docs'
    | '/features'
    | '/pricing'
    | '/dashboard'
    | '/'
    | '/dashboard/analytics'
    | '/dashboard/communities'
    | '/dashboard/raffles'
    | '/dashboard/'
    | '/dashboard/settings'
    | '/dashboard/settings/advanced'
    | '/dashboard/settings/appearance'
    | '/dashboard/settings/language'
    | '/dashboard/settings/notifications'
    | '/dashboard/settings/security'
    | '/dashboard/settings/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/about'
    | '/analytics'
    | '/blog'
    | '/demo'
    | '/docs'
    | '/features'
    | '/pricing'
    | '/dashboard'
    | '/'
    | '/dashboard/analytics'
    | '/dashboard/communities'
    | '/dashboard/raffles'
    | '/dashboard/settings'
    | '/dashboard/settings/advanced'
    | '/dashboard/settings/appearance'
    | '/dashboard/settings/language'
    | '/dashboard/settings/notifications'
    | '/dashboard/settings/security'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/about'
    | '/_layout/analytics'
    | '/_layout/blog'
    | '/_layout/demo'
    | '/_layout/docs'
    | '/_layout/features'
    | '/_layout/pricing'
    | '/dashboard'
    | '/dashboard/_dashboard'
    | '/_layout/'
    | '/dashboard/_dashboard/analytics'
    | '/dashboard/_dashboard/communities'
    | '/dashboard/_dashboard/raffles'
    | '/dashboard/_dashboard/'
    | '/dashboard/_dashboard/settings'
    | '/dashboard/_dashboard/settings/_settings'
    | '/dashboard/_dashboard/settings/_settings/advanced'
    | '/dashboard/_dashboard/settings/_settings/appearance'
    | '/dashboard/_dashboard/settings/_settings/language'
    | '/dashboard/_dashboard/settings/_settings/notifications'
    | '/dashboard/_dashboard/settings/_settings/security'
    | '/dashboard/_dashboard/settings/_settings/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
  DashboardRoute: typeof DashboardRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
  DashboardRoute: DashboardRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout",
        "/dashboard"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/about",
        "/_layout/analytics",
        "/_layout/blog",
        "/_layout/demo",
        "/_layout/docs",
        "/_layout/features",
        "/_layout/pricing",
        "/_layout/"
      ]
    },
    "/_layout/about": {
      "filePath": "_layout.about.tsx",
      "parent": "/_layout"
    },
    "/_layout/analytics": {
      "filePath": "_layout.analytics.tsx",
      "parent": "/_layout"
    },
    "/_layout/blog": {
      "filePath": "_layout.blog.tsx",
      "parent": "/_layout"
    },
    "/_layout/demo": {
      "filePath": "_layout.demo.tsx",
      "parent": "/_layout"
    },
    "/_layout/docs": {
      "filePath": "_layout.docs.tsx",
      "parent": "/_layout"
    },
    "/_layout/features": {
      "filePath": "_layout.features.tsx",
      "parent": "/_layout"
    },
    "/_layout/pricing": {
      "filePath": "_layout.pricing.tsx",
      "parent": "/_layout"
    },
    "/dashboard": {
      "filePath": "dashboard",
      "children": [
        "/dashboard/_dashboard"
      ]
    },
    "/dashboard/_dashboard": {
      "filePath": "dashboard/_dashboard.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/_dashboard/analytics",
        "/dashboard/_dashboard/communities",
        "/dashboard/_dashboard/raffles",
        "/dashboard/_dashboard/",
        "/dashboard/_dashboard/settings"
      ]
    },
    "/_layout/": {
      "filePath": "_layout.index.tsx",
      "parent": "/_layout"
    },
    "/dashboard/_dashboard/analytics": {
      "filePath": "dashboard/_dashboard/analytics.tsx",
      "parent": "/dashboard/_dashboard"
    },
    "/dashboard/_dashboard/communities": {
      "filePath": "dashboard/_dashboard/communities.tsx",
      "parent": "/dashboard/_dashboard"
    },
    "/dashboard/_dashboard/raffles": {
      "filePath": "dashboard/_dashboard/raffles.tsx",
      "parent": "/dashboard/_dashboard"
    },
    "/dashboard/_dashboard/": {
      "filePath": "dashboard/_dashboard/index.tsx",
      "parent": "/dashboard/_dashboard"
    },
    "/dashboard/_dashboard/settings": {
      "filePath": "dashboard/_dashboard/settings",
      "parent": "/dashboard/_dashboard",
      "children": [
        "/dashboard/_dashboard/settings/_settings"
      ]
    },
    "/dashboard/_dashboard/settings/_settings": {
      "filePath": "dashboard/_dashboard/settings/_settings.tsx",
      "parent": "/dashboard/_dashboard/settings",
      "children": [
        "/dashboard/_dashboard/settings/_settings/advanced",
        "/dashboard/_dashboard/settings/_settings/appearance",
        "/dashboard/_dashboard/settings/_settings/language",
        "/dashboard/_dashboard/settings/_settings/notifications",
        "/dashboard/_dashboard/settings/_settings/security",
        "/dashboard/_dashboard/settings/_settings/"
      ]
    },
    "/dashboard/_dashboard/settings/_settings/advanced": {
      "filePath": "dashboard/_dashboard/settings/_settings/advanced.tsx",
      "parent": "/dashboard/_dashboard/settings/_settings"
    },
    "/dashboard/_dashboard/settings/_settings/appearance": {
      "filePath": "dashboard/_dashboard/settings/_settings/appearance.tsx",
      "parent": "/dashboard/_dashboard/settings/_settings"
    },
    "/dashboard/_dashboard/settings/_settings/language": {
      "filePath": "dashboard/_dashboard/settings/_settings/language.tsx",
      "parent": "/dashboard/_dashboard/settings/_settings"
    },
    "/dashboard/_dashboard/settings/_settings/notifications": {
      "filePath": "dashboard/_dashboard/settings/_settings/notifications.tsx",
      "parent": "/dashboard/_dashboard/settings/_settings"
    },
    "/dashboard/_dashboard/settings/_settings/security": {
      "filePath": "dashboard/_dashboard/settings/_settings/security.tsx",
      "parent": "/dashboard/_dashboard/settings/_settings"
    },
    "/dashboard/_dashboard/settings/_settings/": {
      "filePath": "dashboard/_dashboard/settings/_settings/index.tsx",
      "parent": "/dashboard/_dashboard/settings/_settings"
    }
  }
}
ROUTE_MANIFEST_END */
