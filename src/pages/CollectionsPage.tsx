import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Truck,
} from 'lucide-react'

const collections = [
  {
    client: 'EcoPlast Reciclagem',
    location: 'Distrito Industrial',
    date: '06/09/2026',
    time: '08:30',
    status: 'Em andamento',
  },
  {
    client: 'Supermercado Verde',
    location: 'Centro',
    date: '06/09/2026',
    time: '10:15',
    status: 'Agendada',
  },
  {
    client: 'Indústria Nova Era',
    location: 'Zona Norte',
    date: '06/09/2026',
    time: '13:40',
    status: 'Agendada',
  },
  {
    client: 'Condomínio Jardim',
    location: 'Jardim América',
    date: '06/09/2026',
    time: '15:20',
    status: 'Concluída',
  },
]

function getStatusStyles(status: string) {
  switch (status) {
    case 'Concluída':
      return 'bg-[#DCFCE7] text-[#166534]'
    case 'Em andamento':
      return 'bg-[#DBEAFE] text-[#1D4ED8]'
    default:
      return 'bg-[#FFF7E8] text-[#B7791F]'
  }
}

export function CollectionsPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold text-[#17211B]">
          Coletas
        </h1>

        <p className="mt-1 text-sm text-[#647067]">
          Acompanhe a programação e o andamento das coletas.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-[#E3E9E5] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#647067]">
              Coletas hoje
            </span>

            <CalendarDays
              size={20}
              className="text-[#2F6B4F]"
              strokeWidth={1.8}
            />
          </div>

          <p className="mt-3 text-2xl font-bold text-[#17211B]">
            24
          </p>
        </div>

        <div className="rounded-2xl border border-[#E3E9E5] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#647067]">
              Em andamento
            </span>

            <Truck
              size={20}
              className="text-[#2F6B4F]"
              strokeWidth={1.8}
            />
          </div>

          <p className="mt-3 text-2xl font-bold text-[#17211B]">
            6
          </p>
        </div>

        <div className="rounded-2xl border border-[#E3E9E5] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#647067]">
              Agendadas
            </span>

            <Clock3
              size={20}
              className="text-[#B7791F]"
              strokeWidth={1.8}
            />
          </div>

          <p className="mt-3 text-2xl font-bold text-[#17211B]">
            12
          </p>
        </div>

        <div className="rounded-2xl border border-[#E3E9E5] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#647067]">
              Concluídas
            </span>

            <CheckCircle2
              size={20}
              className="text-[#2F6B4F]"
              strokeWidth={1.8}
            />
          </div>

          <p className="mt-3 text-2xl font-bold text-[#17211B]">
            6
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-[#E3E9E5] bg-white shadow-sm">
        <div className="border-b border-[#E3E9E5] p-6">
          <h2 className="font-semibold text-[#17211B]">
            Programação de coletas
          </h2>

          <p className="mt-1 text-sm text-[#647067]">
            Coletas programadas para hoje.
          </p>
        </div>

        <div className="divide-y divide-[#E3E9E5]">
          {collections.map((collection) => (
            <div
              key={`${collection.client}-${collection.time}`}
              className="flex flex-col gap-4 p-6 transition hover:bg-[#FAFCFB] lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0]">
                  <Truck
                    size={20}
                    className="text-[#2F6B4F]"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="font-medium text-[#17211B]">
                    {collection.client}
                  </p>

                  <div className="mt-1 flex items-center gap-1.5 text-sm text-[#647067]">
                    <MapPin size={15} strokeWidth={1.8} />
                    <span>{collection.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <p className="text-sm font-medium text-[#17211B]">
                    {collection.date}
                  </p>

                  <p className="mt-1 text-xs text-[#647067]">
                    {collection.time}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-medium ${getStatusStyles(
                    collection.status,
                  )}`}
                >
                  {collection.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
