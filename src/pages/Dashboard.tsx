import {
  AlertTriangle,
  FileCheck2,
  Recycle,
  Truck,
} from 'lucide-react'

import { MetricCard } from '../components/dashboard/MetricCard'

export function Dashboard() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold text-[#17211B]">
          Dashboard Operacional
        </h1>

        <p className="mt-1 text-sm text-[#647067]">
          Visão geral da operação da Rota Verde Ambiental.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Resíduos coletados"
          value="612 t"
          description="Volume mensal"
          icon={Recycle}
        />

        <MetricCard
          title="Recicláveis triados"
          value="540 t"
          description="Volume mensal comercializado"
          icon={FileCheck2}
        />

        <MetricCard
          title="Contratos ativos"
          value="428"
          description="Clientes em operação"
          icon={Truck}
        />

        <MetricCard
          title="Quebras em rota"
          value="3,2"
          description="Média mensal"
          icon={AlertTriangle}
          iconColor="text-[#B7791F]"
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-[#E3E9E5] bg-white p-6 shadow-sm">
          <div>
            <h2 className="font-semibold text-[#17211B]">
              Coleta x Triagem
            </h2>

            <p className="mt-1 text-sm text-[#647067]">
              Comparativo mensal de resíduos coletados e triados.
            </p>
          </div>

          <div className="mt-8 flex h-64 items-end justify-center gap-12">
            <div className="flex h-full flex-col items-center justify-end">
              <div
                className="w-20 rounded-t-xl bg-[#78A88B]"
                style={{ height: '85%' }}
              />

              <span className="mt-3 text-sm font-medium text-[#17211B]">
                612 t
              </span>

              <span className="text-xs text-[#647067]">
                Coletado
              </span>
            </div>

            <div className="flex h-full flex-col items-center justify-end">
              <div
                className="w-20 rounded-t-xl bg-[#2F6B4F]"
                style={{ height: '75%' }}
              />

              <span className="mt-3 text-sm font-medium text-[#17211B]">
                540 t
              </span>

              <span className="text-xs text-[#647067]">
                Triado
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E3E9E5] bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-[#17211B]">
            Status da operação
          </h2>

          <p className="mt-1 text-sm text-[#647067]">
            Indicadores que merecem atenção.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 rounded-xl bg-[#EDF5F0] p-4">
              <div className="h-2.5 w-2.5 rounded-full bg-[#2F6B4F]" />

              <div>
                <p className="text-sm font-medium text-[#17211B]">
                  Operação normal
                </p>

                <p className="text-xs text-[#647067]">
                  Coleta dentro do volume esperado.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#FFF7E8] p-4">
              <div className="h-2.5 w-2.5 rounded-full bg-[#B7791F]" />

              <div>
                <p className="text-sm font-medium text-[#17211B]">
                  Manutenção
                </p>

                <p className="text-xs text-[#647067]">
                  Média de 3,2 quebras mensais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
