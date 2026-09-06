Atlas — Rota Verde Ambiental
Sistema operacional desenvolvido para a **Rota Verde Ambiental**, com foco no acompanhamento da operação de coleta, pesagem, comprovantes e gestão operacional.

O projeto utiliza uma interface administrativa moderna, responsiva e preparada para evolução futura com integração a dados reais e APIs.

## Visão geral

O Atlas centraliza informações importantes da operação em uma única interface:

- Dashboard operacional
- Controle de pesagens
- Portal de comprovantes
- Programação de coletas
- Configurações do sistema
- Navegação entre módulos
- Layout responsivo para dispositivos móveis

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React
- ESLint

## Estrutura do projeto

```text
src/
├── components/
│   ├── dashboard/
│   │   └── MetricCard.tsx
│   │
│   └── layout/
│       ├── AppShell.tsx
│       ├── Header.tsx
│       └── Sidebar.tsx
│
├── pages/
│   ├── DashboardPage.tsx
│   ├── WeighingPage.tsx
│   ├── ClientPortalPage.tsx
│   ├── CollectionsPage.tsx
│   └── SettingsPage.tsx
│
├── routes/
│   └── AppRoutes.tsx
│
├── App.tsx
├── main.tsx
└── index.css
svg
```

## Páginas

### Dashboard

Apresenta uma visão geral da operação, incluindo:

- Resíduos coletados
- Recicláveis triados
- Contratos ativos
- Quebras em rota
- Comparativo entre coleta e triagem
- Status da operação

Rota:

```text
/dashboard
svg
```

### Pesagens

Área destinada ao acompanhamento das pesagens realizadas na operação.

Rota:

```text
/pesagens
svg
```

### Comprovantes

Portal destinado à consulta e acompanhamento dos comprovantes da operação.

Rota:

```text
/comprovantes
svg
```

### Coletas

Apresenta a programação das coletas e seus respectivos status.

Rota:

```text
/coletas
svg
```

### Configurações

Área destinada às configurações do sistema, organizada inicialmente em:

- Dados da empresa
- Perfil do usuário
- Notificações
- Segurança e acesso

Rota:

```text
/configuracoes
svg
```

## Navegação

A aplicação utiliza `react-router-dom` para controlar a navegação entre as páginas.

A barra lateral possui os principais módulos:

```text
Dashboard
Pesagens
Comprovantes
Coletas
Configurações
svg
```

O item atualmente selecionado é destacado automaticamente através do `NavLink`.

## Layout

O sistema utiliza uma estrutura composta por:

- `AppShell`
- `Sidebar`
- `Header`
- Área principal de conteúdo

A barra lateral permanece fixa no desktop, enquanto o conteúdo principal possui sua própria área de rolagem.

No mobile, a navegação utiliza um drawer/menu lateral para preservar a usabilidade sem alterar o visual estabelecido no desktop.

## Responsividade

A interface foi estruturada para funcionar em diferentes tamanhos de tela.

No desktop:

- Sidebar fixa
- Header completo
- Layout com múltiplas colunas
- Cards distribuídos horizontalmente

No mobile:

- Navegação através de menu lateral
- Conteúdo adaptado à largura da tela
- Cards reorganizados verticalmente
- Informações secundárias ocultadas quando necessário

A responsividade continuará sendo refinada durante a evolução do projeto, sempre preservando o visual atual do desktop.

## Instalação

Clone o projeto e entre na pasta:

```bash
git clone https://github.com/israel-reis-pereira/projeto-atlas.git

cd projeto-atlas
svg
```

Instale as dependências:

```bash
npm install
svg
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
svg
```

O Vite disponibilizará a aplicação localmente, normalmente em:

```text
http://localhost:5173/
svg
```

## Build de produção

Para verificar se o projeto está compilando corretamente:

```bash
npm run build
svg
```

O comando executa a verificação do TypeScript e gera o build de produção através do Vite.

## Estado atual

A estrutura visual e a navegação principal do sistema já estão implementadas.

Atualmente o projeto possui:

-  Layout principal
-  Sidebar
-  Header
-  Dashboard operacional
-  Navegação entre páginas
-  Página de Pesagens
-  Página de Comprovantes
-  Página de Coletas
-  Página de Configurações
-  Responsividade inicial
-  Menu mobile
-  Estrutura de rotas
-  Build de produção funcionando

## Próximas etapas

A próxima fase do projeto poderá transformar as telas atuais, que utilizam dados demonstrativos, em módulos funcionais conectados a dados reais.

Possíveis evoluções:

- Integração com API/backend
- Persistência de dados
- Autenticação de usuários
- Controle de permissões
- Cadastro e gerenciamento de clientes
- Cadastro de veículos e motoristas
- Registro real de pesagens
- Geração e consulta de comprovantes
- Gestão de rotas e coletas
- Filtros e pesquisas
- Notificações
- Configurações funcionais
- Dashboard com indicadores em tempo real

## Objetivo do projeto

O objetivo do Atlas é evoluir de uma interface operacional para uma plataforma completa de gestão da operação da Rota Verde Ambiental, mantendo uma experiência simples, clara e eficiente para os usuários.

---

**Atlas — Rota Verde Ambiental**