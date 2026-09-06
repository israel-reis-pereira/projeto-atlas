import { Download, FileCheck, Leaf, Search } from 'lucide-react'

const certificates = [
  {
    id: 'CDA-2026-0842',
    date: '05/09/2026',
    material: 'Materiais recicláveis',
    quantity: '1.240 kg',
    status: 'Disponível',
  },
  {
    id: 'CDA-2026-0781',
    date: '29/08/2026',
    material: 'Materiais recicláveis',
    quantity: '980 kg',
    status: 'Disponível',
  },
  {
    id: 'CDA-2026-0719',
    date: '22/08/2026',
    material: 'Materiais recicláveis',
    quantity: '1.180 kg',
    status: 'Disponível',
  },
  {
    id: 'CDA-2026-0654',
    date: '15/08/2026',
    material: 'Orgânicos',
    quantity: '760 kg',
    status: 'Disponível',
  },
]

export function ClientPortalPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-[#2F7D4A]">
          Portal do cliente
        </p>

        <h2 className="mt-1 text-2xl font-bold text-[#17211B]">
          Olá, Indústria Horizonte
        </h2>

        <p className="mt-1 text-sm text-[#647067]">
          Acompanhe suas destinações e acesse seus comprovantes ambientais.
        </p>
      </div>

      <section className="rounded-2xl bg-[#1F5E38] p-6 text-white shadow-sm">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Leaf size={22} />
              </div>

              <div>
                <p className="text-sm text-white/70">
                  Destinação ambiental
                </p>

                <h3 className="text-xl font-semibold">
                  Seus resíduos estão sendo transformados
                </h3>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
              Consulte o histórico de destinação correta dos materiais
              coletados pela Rota Verde Ambiental.
            </p>
          </div>

          <div className="rounded-xl bg-white/10 px-6 py-4 md:min-w-[180px]">
            <p className="text-xs uppercase tracking-wide text-white/60">
              Total destinado
            </p>

            <p className="mt-1 text-3xl font-bold">
              4,16 t
            </p>

            <p className="mt-1 text-xs text-white/60">
              nos últimos 30 dias
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-[#E1E7E3] bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4ED]">
            <Leaf size={20} className="text-[#2F7D4A]" />
          </div>

          <p className="mt-4 text-sm text-[#647067]">
            Recicláveis destinados
          </p>

          <p className="mt-1 text-2xl font-bold text-[#17211B]">
            3,40 t
          </p>
        </div>

        <div className="rounded-2xl border border-[#E1E7E3] bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4ED]">
            <FileCheck size={20} className="text-[#2F7D4A]" />
          </div>

          <p className="mt-4 text-sm text-[#647067]">
            Comprovantes emitidos
          </p>

          <p className="mt-1 text-2xl font-bold text-[#17211B]">
            12
          </p>
        </div>

        <div className="rounded-2xl border border-[#E1E7E3] bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4ED]">
            <Leaf size={20} className="text-[#2F7D4A]" />
          </div>

          <p className="mt-4 text-sm text-[#647067]">
            Taxa de aproveitamento
          </p>

          <p className="mt-1 text-2xl font-bold text-[#17211B]">
            92%
          </p>
        </div>
      </div>

      <section className="rounded-2xl border border-[#E1E7E3] bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-[#EEF2EF] p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[#17211B]">
              Comprovantes de destinação
            </h3>

            <p className="mt-1 text-sm text-[#647067]">
              Acesse e baixe seus comprovantes ambientais.
            </p>
          </div>

          <div className="relative w-full md:w-64">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A958E]"
            />

            <input
              type="text"
              placeholder="Buscar comprovante..."
              className="w-full rounded-xl border border-[#D8E0DB] py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#2F7D4A] focus:ring-2 focus:ring-[#2F7D4A]/10"
            />
          </div>
        </div>

        <div className="divide-y divide-[#EEF2EF]">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF4ED]">
                  <FileCheck
                    size={20}
                    className="text-[#2F7D4A]"
                  />
                </div>

                <div>
                  <p className="font-semibold text-[#17211B]">
                    {certificate.id}
                  </p>

                  <p className="mt-1 text-sm text-[#647067]">
                    {certificate.material} • {certificate.quantity}
                  </p>

                  <p className="mt-1 text-xs text-[#8A958E]">
                    Coleta realizada em {certificate.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="rounded-full bg-[#EAF4ED] px-3 py-1 text-xs font-semibold text-[#2F7D4A]">
                  {certificate.status}
                </span>

                <button className="flex items-center gap-2 rounded-xl bg-[#2F7D4A] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#25663C]">
                  <Download size={16} />
                  Baixar PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
