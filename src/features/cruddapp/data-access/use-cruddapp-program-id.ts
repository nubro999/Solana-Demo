import { useSolana } from '@/components/solana/use-solana'
import { useMemo } from 'react'
import { getCruddappProgramId } from '@project/anchor'

export function useCruddappProgramId() {
  const { cluster } = useSolana()

  return useMemo(() => getCruddappProgramId(cluster.id), [cluster])
}
