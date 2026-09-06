import { ArrowLeft, Building2, Save } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CompanySettingsPage() {
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
          Dados da empresa
        </h1>

        <p className="mt-1 text-sm text-[#647067]">
          Gerencie as informações cadastrais da Rota Verde Ambiental.
        </p>
      </section>

      <section className="rounded-2xl border border-[#E3E9E5] bg-white shadow-sm">
        <div className="flex items-center gap-4 border-b border-[#E3E9E5] p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF5F0]">
            <Building2
              size={20}
              className="text-[#2F6B4F]"
              strokeWidth={1.8}
            />
          </div>

          <div>
            <h2 className="font-semibold text-[#17211B]">
              Informações cadastrais
            </h2>

            <p className="mt-1 text-sm text-[#647067]">
              Dados utilizados nos documentos e comprovantes.
            </p>
          </div>
        </div>

        <div className="grid gap-5 p-6 sm:grid-cols-2">
          <label className="sm:col-span-2">
            <span className="text-sm font-medium text-[#17211B]">
              Razão social
            </span>

            <input
              type="text"
              defaultValue="Rota Verde Ambiental"
              className="mt-2 w-full rounded-lg border border-[#D9E2DC] bg-white px-4 py-3 text-sm text-[#17211B] outline-none transition focus:border-[#2F6B4F] focus:ring-2 focus:ring-[#DCFCE7]"
            />
          </label>

          <label>
            <span className="text-sm font-medium text-[#17211B]">
              CNPJ
            </span>

            <input
              type="text"
              defaultValue="12.345.678/0001-90"
              className="mt-2 w-full rounded-lg border border-[#D9E2DC] bg-white px-4 py-3 text-sm text-[#17211B] outline-none transition focus:border-[#2F6B4F] focus:ring-2 focus:ring-[#DCFCE7]"
            />
          </label>

          <label>
            <span className="text-sm font-medium text-[#17211B]">
              Telefone
            </span>

            <input
              type="tel"
              defaultValue="(17) 3333-4444"
              className="mt-2 w-full rounded-lg border border-[#D9E2DC] bg-white px-4 py-3 text-sm text-[#17211B] outline-none transition focus:border-[#2F6B4F] focus:ring-2 focus:ring-[#DCFCE7]"
            />
          </label>

          <label className="sm:col-span-2">
            <span className="text-sm font-medium text-[#17211B]">
              Endereço
            </span>

            <input
              type="text"
              defaultValue="Av. Ambiental, 1000"
              className="mt-2 w-full rounded-lg border border-[#D9E2DC] bg-white px-4 py-3 text-sm text-[#17211B] outline-none transition focus:border-[#2F6B4F] focus:ring-2 focus:ring-[#DCFCE7]"
            />
          </label>

          <label>
            <span className="text-sm font-medium text-[#17211B]">
              Cidade
            </span>

            <input
              type="text"
              defaultValue="Barretos"
              className="mt-2 w-full rounded-lg border border-[#D9E2DC] bg-white px-4 py-3 text-sm text-[#17211B] outline-none transition focus:border-[#2F6B4F] focus:ring-2 focus:ring-[#DCFCE7]"
            />
          </label>

          <label>
            <span className="text-sm font-medium text-[#17211B]">
              Estado
            </span>

            <input
              type="text"
              defaultValue="SP"
              className="mt-2 w-full rounded-lg border border-[#D9E2DC] bg-white px-4 py-3 text-sm text-[#17211B] outline-none transition focus:border-[#2F6B4F] focus:ring-2 focus:ring-[#DCFCE7]"
            />
          </label>
        </div>

        <div className="flex justify-end border-t border-[#E3E9E5] p-6">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-[#14532D] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#166534]"
          >
            <Save size={17} strokeWidth={1.8} />
            Salvar alterações
          </button>
        </div>
      </section>
    </div>
  )
}
