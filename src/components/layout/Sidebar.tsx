import {
  BarChart3,
  ClipboardList,
  FileCheck2,
  Settings,
  Truck,
  X,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navigation = [
  {
    label: 'Dashboard',
    icon: BarChart3,
    to: '/dashboard',
  },
  {
    label: 'Pesagens',
    icon: ClipboardList,
    to: '/pesagens',
  },
  {
    label: 'Comprovantes',
    icon: FileCheck2,
    to: '/comprovantes',
  },
  {
    label: 'Coletas',
    icon: Truck,
    to: '/coletas',
  },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[#E2E8E4] bg-white transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-[#E2E8E4] px-6">
          <div>
            <div className="text-xl font-bold tracking-tight text-[#14532D]">
              ATLAS
            </div>

            <div className="text-xs font-medium text-[#647067]">
              Rota Verde Ambiental
            </div>
          </div>

          <button
            type="button"
            aria-label="Fechar menu"
            onClick={onClose}
            className="rounded-lg p-2 text-[#647067] transition hover:bg-[#F6F8F7] lg:hidden"
          >
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-[#DCFCE7] text-[#14532D]'
                      : 'text-[#647067] hover:bg-[#F6F8F7] hover:text-[#17211B]'
                  }`
                }
              >
                <Icon size={19} strokeWidth={1.8} />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="shrink-0 border-t border-[#E2E8E4] p-4">
          <NavLink
            to="/configuracoes"
            onClick={onClose}
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? 'bg-[#DCFCE7] text-[#14532D]'
                  : 'text-[#647067] hover:bg-[#F6F8F7] hover:text-[#17211B]'
              }`
            }
          >
            <Settings size={19} strokeWidth={1.8} />
            <span>Configurações</span>
          </NavLink>
        </div>
      </aside>
    </>
  )
}
