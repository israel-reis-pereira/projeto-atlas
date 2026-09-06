export function WeighingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#17211B]">
          Registro de Pesagem
        </h2>

        <p className="mt-1 text-sm text-[#647067]">
          Registre a pesagem dos veículos que chegam à Central de Triagem.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="rounded-2xl border border-[#E1E7E3] bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#17211B]">
              Nova pesagem
            </h3>

            <p className="mt-1 text-sm text-[#647067]">
              Preencha os dados abaixo para registrar a entrada do veículo.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#17211B]">
                Rota
              </label>

              <select className="w-full rounded-xl border border-[#D8E0DB] bg-white px-4 py-3 text-sm text-[#17211B] outline-none transition focus:border-[#2F7D4A] focus:ring-2 focus:ring-[#2F7D4A]/10">
                <option>Selecione a rota</option>
                <option>RT-024 — Barretos Norte</option>
                <option>RT-025 — Barretos Centro</option>
                <option>RT-026 — Bebedouro</option>
                <option>RT-027 — Colômbia</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#17211B]">
                Caminhão
              </label>

              <select className="w-full rounded-xl border border-[#D8E0DB] bg-white px-4 py-3 text-sm text-[#17211B] outline-none transition focus:border-[#2F7D4A] focus:ring-2 focus:ring-[#2F7D4A]/10">
                <option>Selecione o caminhão</option>
                <option>CAM-012 — ABC-1D23</option>
                <option>CAM-018 — DEF-4G56</option>
                <option>CAM-021 — GHI-7J89</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#17211B]">
                Peso líquido
              </label>

              <div className="relative">
                <input
                  type="number"
                  placeholder="0"
                  className="w-full rounded-xl border border-[#D8E0DB] bg-white px-4 py-3 pr-14 text-sm text-[#17211B] outline-none transition focus:border-[#2F7D4A] focus:ring-2 focus:ring-[#2F7D4A]/10"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[#647067]">
                  kg
                </span>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#17211B]">
                Tipo de resíduo
              </label>

              <select className="w-full rounded-xl border border-[#D8E0DB] bg-white px-4 py-3 text-sm text-[#17211B] outline-none transition focus:border-[#2F7D4A] focus:ring-2 focus:ring-[#2F7D4A]/10">
                <option>Selecione o tipo</option>
                <option>Reciclável</option>
                <option>Orgânico</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end border-t border-[#EEF2EF] pt-6">
            <button className="rounded-xl bg-[#2F7D4A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#25663C]">
              Registrar pesagem
            </button>
          </div>
        </section>

        <aside className="rounded-2xl border border-[#E1E7E3] bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4ED]">
              <span className="text-lg">⚖️</span>
            </div>

            <div>
              <h3 className="font-semibold text-[#17211B]">
                Balança da Central
              </h3>

              <p className="text-xs text-[#647067]">
                Central de Triagem — Barretos
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-[#F6F8F7] p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-[#647067]">
              Status
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3BA55C]" />

              <span className="text-sm font-semibold text-[#17211B]">
                Balança operacional
              </span>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-wide text-[#647067]">
              Última pesagem
            </p>

            <div className="mt-3 rounded-xl border border-[#E1E7E3] p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#647067]">
                  CAM-018
                </span>

                <span className="font-semibold text-[#17211B]">
                  2.840 kg
                </span>
              </div>

              <p className="mt-2 text-xs text-[#647067]">
                RT-025 • há 8 minutos
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
