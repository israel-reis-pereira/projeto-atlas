import {
  BarChart3,
  ClipboardList,
  FileCheck2,
  Truck,
  Settings,
} from 'lucide-react'

const navigation = [
  {
    label: 'Dashboard',
    icon: BarChart3,
    active: true,
  },
  {
    label: 'Pesagens',
    icon: ClipboardList,
  },
  {
    label: 'Comprovantes',
    icon: FileCheck2,
  },
  {
    label: 'Coletas',
    icon: Truck,
  },
]

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-[#E2E8E4] bg-white">
      <div className="flex h-20 items-center border-b border-[#E2E8E4] px-6">
        <div>
          <div className="text-xl font-bold tracking-tight text-[#14532D]">
            ATLAS
          </div>

          <div className="text-xs font-medium text-[#647067]">
            Rota Verde Ambiental
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                item.active
                  ? 'bg-[#DCFCE7] text-[#14532D]'
                  : 'text-[#647067] hover:bg-[#F6F8F7] hover:text-[#17211B]'
              }`}
            >
              <Icon size={19} strokeWidth={1.8} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="border-t border-[#E2E8E4] p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-[#647067] transition hover:bg-[#F6F8F7] hover:text-[#17211B]">
          <Settings size={19} strokeWidth={1.8} />
          <span>Configurações</span>
        </button>
      </div>
    </aside>
  )
}
