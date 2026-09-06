import { Bell } from 'lucide-react'

export function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-[#E2E8E4] bg-white px-8">
      <div>
        <h1 className="text-lg font-semibold text-[#17211B]">
          Dashboard
        </h1>

        <p className="text-sm text-[#647067]">
          Visão geral da operação
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button
          aria-label="Notificações"
          className="relative rounded-lg p-2 text-[#647067] transition hover:bg-[#F6F8F7]"
        >
          <Bell size={20} strokeWidth={1.8} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#16A34A]" />
        </button>

        <div className="flex items-center gap-3 border-l border-[#E2E8E4] pl-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#14532D] text-sm font-semibold text-white">
            PA
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[#17211B]">
              Priscila Andrade
            </p>

            <p className="text-xs text-[#647067]">
              Diretora de Operações
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
