import { useSolana } from '@/components/solana/use-solana'
import { WalletDropdown } from '@/components/wallet-dropdown'
import { AppHero } from '@/components/app-hero'
import { CruddappUiProgramExplorerLink } from './ui/cruddapp-ui-program-explorer-link'
import { CruddappUiCreate } from './ui/cruddapp-ui-create'
import { CruddappUiProgram } from '@/features/cruddapp/ui/cruddapp-ui-program'

export default function CruddappFeature() {
  const { account } = useSolana()

  if (!account) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="hero py-[64px]">
          <div className="hero-content text-center">
            <WalletDropdown />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <AppHero title="Cruddapp" subtitle={'Run the program by clicking the "Run program" button.'}>
        <p className="mb-6">
          <CruddappUiProgramExplorerLink />
        </p>
        <CruddappUiCreate />
      </AppHero>
      <CruddappUiProgram />
    </div>
  )
}
