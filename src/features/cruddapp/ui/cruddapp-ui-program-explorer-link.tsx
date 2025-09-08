import { useCruddappProgramId } from '@/features/cruddapp/data-access/use-cruddapp-program-id'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { ellipsify } from '@wallet-ui/react'

export function CruddappUiProgramExplorerLink() {
  const programId = useCruddappProgramId()

  return <AppExplorerLink address={programId.toString()} label={ellipsify(programId.toString())} />
}
