import {
  Bell,
  Building2,
  ChevronRight,
  LockKeyhole,
  UserRound,
} from 'lucide-react'

const settingsItems = [
  {
    title: 'Dados da empresa',
    description: 'Informações cadastrais e dados da Rota Verde Ambiental.',
    icon: Building2,
  },
  {
    title: 'Perfil do usuário',
    description: 'Nome, e-mail e preferências do usuário atual.',
    icon: UserRound,
  },
  {
    title: 'Notificações',
    description: 'Configure quais avisos deseja receber durante a operação.',
    icon: Bell,
  },
  {
    title: 'Segurança e acesso',
    description: 'Senha, autenticação e configurações de acesso.',
    icon: LockKeyhole,
  },
]

export function SettingsPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold text-[#17211B]">
          Configurações
        </h1>

        <p className="mt-1 text-sm text-[#647067]">
          Gerencie as preferências e informações da operação.
        </p>
      </section>

      <section className="max-w-4xl rounded-2xl border border-[#E3E9E5] bg-white shadow-sm">
        <div className="border-b border-[#E3E9E5] p-6">
          <h2 className="font-semibold text-[#17211B]">
            Preferências
          </h2>

          <p className="mt-1 text-sm text-[#647067]">
            Acesse as principais configurações do sistema.
          </p>
        </div>

        <div className="divide-y divide-[#E3E9E5]">
          {settingsItems.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.title}
                type="button"
                className="flex w-full items-center gap-4 p-6 text-left transition hover:bg-[#FAFCFB]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0]">
                  <Icon
                    size={20}
                    className="text-[#2F6B4F]"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-medium text-[#17211B]">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm text-[#647067]">
                    {item.description}
                  </p>
                </div>

                <ChevronRight
                  size={19}
                  className="shrink-0 text-[#94A19A]"
                  strokeWidth={1.8}
                />
              </button>
            )
          })}
        </div>
      </section>

      <section className="max-w-4xl rounded-2xl border border-[#E3E9E5] bg-[#EDF5F0] p-6">
        <p className="text-sm font-medium text-[#14532D]">
          Atlas
        </p>

        <p className="mt-1 text-sm text-[#647067]">
          Sistema operacional da Rota Verde Ambiental.
        </p>
      </section>
    </div>
  )
}
