import { ArrowLeft, Bell } from 'lucide-react'
import { Link } from 'react-router-dom'

const notificationOptions = [
  {
    title: 'Coletas',
    description: 'Receba avisos sobre coletas agendadas e alterações de rota.',
    defaultChecked: true,
  },
  {
    title: 'Pesagens',
    description: 'Receba notificações sobre novas pesagens e inconsistências.',
    defaultChecked: true,
  },
  {
    title: 'Comprovantes',
    description: 'Seja avisado quando novos comprovantes estiverem disponíveis.',
    defaultChecked: true,
  },
  {
    title: 'Alertas operacionais',
    description: 'Receba alertas sobre ocorrências que precisam de atenção.',
    defaultChecked: false,
  },
]

export function NotificationSettingsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <section>
        <Link
          to="/configuracoes"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#647067] transition hover:text-[#14532D]"
        >
          <ArrowLeft size={17} strokeWidth={1.8} />
          Voltar para configurações
        </Link>

        <h1 className="text-2xl font-bold text-[#17211B]">
          Notificações
        </h1>

        <p className="mt-1 text-sm text-[#647067]">
          Escolha quais avisos deseja receber durante a operação.
        </p>
      </section>

      <section className="rounded-2xl border border-[#E3E9E5] bg-white shadow-sm">
        <div className="flex items-center gap-4 border-b border-[#E3E9E5] p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF5F0]">
            <Bell
              size={20}
              className="text-[#2F6B4F]"
              strokeWidth={1.8}
            />
          </div>

          <div>
            <h2 className="font-semibold text-[#17211B]">
              Preferências de notificações
            </h2>

            <p className="mt-1 text-sm text-[#647067]">
              Controle os avisos exibidos para seu usuário.
            </p>
          </div>
        </div>

        <div className="divide-y divide-[#E3E9E5]">
          {notificationOptions.map((option) => (
            <label
              key={option.title}
              className="flex cursor-pointer items-center gap-4 p-6 transition hover:bg-[#FAFCFB]"
            >
              <input
                type="checkbox"
                defaultChecked={option.defaultChecked}
                className="h-5 w-5 accent-[#2F6B4F]"
              />

              <div>
                <p className="font-medium text-[#17211B]">
                  {option.title}
                </p>

                <p className="mt-1 text-sm text-[#647067]">
                  {option.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </section>
    </div>
  )
}
