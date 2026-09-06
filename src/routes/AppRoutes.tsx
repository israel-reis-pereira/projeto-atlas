import { Navigate, Route, Routes } from 'react-router-dom'

import { AppShell } from '../components/layout/AppShell'
import { ClientPortalPage } from '../pages/ClientPortalPage'
import { DashboardPage } from '../pages/DashboardPage'
import { WeighingPage } from '../pages/WeighingPage'
import { CollectionsPage } from '../pages/CollectionsPage'
import { SettingsPage } from '../pages/SettingsPage'
import { CompanySettingsPage } from '../pages/CompanySettingsPage'
import { NotificationSettingsPage } from '../pages/NotificationSettingsPage'
import { ProfileSettingsPage } from '../pages/ProfileSettingsPage'
import { SecuritySettingsPage } from '../pages/SecuritySettingsPage'


export function AppRoutes() {
  return (
    <AppShell>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/pesagens" element={<WeighingPage />} />
        <Route path="/comprovantes" element={<ClientPortalPage />} />
        <Route path="/coletas" element={<CollectionsPage />} />
        <Route path="/configuracoes" element={<SettingsPage />} />
        <Route path="/configuracoes/empresa" element={<CompanySettingsPage />}/>
        <Route path="/configuracoes/notificacoes" element={<NotificationSettingsPage />}/>
        <Route path="/configuracoes/perfil" element={<ProfileSettingsPage />}/>
        <Route path="/configuracoes/seguranca" element={<SecuritySettingsPage />}/>
        
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </AppShell>
  )
}
