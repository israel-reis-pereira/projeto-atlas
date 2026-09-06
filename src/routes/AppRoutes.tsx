import { Navigate, Route, Routes } from 'react-router-dom'

import { AppShell } from '../components/layout/AppShell'
import { ClientPortalPage } from '../pages/ClientPortalPage'
import { DashboardPage } from '../pages/DashboardPage'
import { WeighingPage } from '../pages/WeighingPage'
import { CollectionsPage } from '../pages/CollectionsPage'
import { SettingsPage } from '../pages/SettingsPage'

export function AppRoutes() {
  return (
    <AppShell>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/pesagens" element={<WeighingPage />} />
        <Route path="/comprovantes" element={<ClientPortalPage />} />
        <Route path="/coletas" element={<CollectionsPage />} />
        <Route path="/configuracoes" element={<SettingsPage />} />


        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </AppShell>
  )
}
