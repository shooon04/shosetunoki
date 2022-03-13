// @ts-nocheck
/* eslint-disable */
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import {GA_ID, existsGaId, pageview} from '../lib/amdxg-components/GoogleAnalytics.js'

export default function usePageView() {
  const router = useRouter()
  useEffect(() => {
    if (!existsGaId) {
      return
    }

    const handleRouteChange = (path, { shallow }) => {
      if (!shallow) {
        pageview(path)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}