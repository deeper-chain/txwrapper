import {
  getRegistryBase,
  GetRegistryOptsCore,
  getSpecTypes,
  TypeRegistry,
} from '@substrate/txwrapper-core';

// As a convenience to users we can provide them with hardcoded chain properties
// as these rarely change.
/**
 * `ChainProperties` for networks that txwrapper-foo supports. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty safe to hardcode them.
 */
const KNOWN_CHAIN_PROPERTIES = {
  'deeper-chain': {
    ss58Format: 42,
    tokenDecimals: 18,
    tokenSymbol: 'DPR',
  },
};

// We override the `specName` property of `GetRegistryOptsCore` in order to get narrower type specificity,
// hopefully creating a better experience for users.
/**
 * Options for the `getRegistry` function.
 */
export interface GetRegistryOpts extends GetRegistryOptsCore {
  specName: keyof typeof KNOWN_CHAIN_PROPERTIES;
}

const types = {
  Address: 'MultiAddress',
  LookupSource: 'MultiAddress',
  AccountInfo: 'AccountInfoWithDualRefCount',
  IpV4: 'Vec<u8>',
  CountryRegion: 'Vec<u8>',
  DurationEras: 'u8',
  Node: {
    account_id: 'AccountId',
    ipv4: 'IpV4',
    country: 'CountryRegion',
    expire: 'BlockNumber',
  },
  ChannelOf: {
    client: 'AccountId',
    server: 'AccountId',
    balance: 'Balance',
    nonce: 'u64',
    opened: 'BlockNumber',
    expiration: 'BlockNumber',
  },
  CreditLevel: {
    _enum: ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'],
  },
  CampaignId: 'u16',
  CreditSetting: {
    campaign_id: 'CampaignId',
    credit_level: 'CreditLevel',
    staking_balance: 'Balance',
    base_apy: 'Percent',
    bonus_apy: 'Percent',
    max_rank_with_bonus: 'u32',
    tax_rate: 'Percent',
    max_referees_with_rewards: 'u8',
    reward_per_referee: 'Balance',
  },
  EraIndex: 'u32',
  CreditData: {
    campaign_id: 'CampaignId',
    credit: 'u64',
    initial_credit_level: 'CreditLevel',
    rank_in_initial_credit_level: 'u32',
    number_of_referees: 'u8',
    current_credit_level: 'CreditLevel',
    reward_eras: 'EraIndex',
  },
  DelegatorData: {
    delegator: 'AccountId',
    delegated_validators: 'Vec<AccountId>',
    unrewarded_since: 'Option<EraIndex>',
    delegating: 'bool',
  },
  ValidatorData: {
    delegators: 'BTreeSet<AccountId>',
    elected_era: 'EraIndex',
  },
  RewardData: {
    total_referee_reward: 'Balance',
    received_referee_reward: 'Balance',
    referee_reward: 'Balance',
    received_pocr_reward: 'Balance',
    poc_reward: 'Balance',
  },
  ValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool',
  },
};
/**
 * Get a type registry for networks that txwrapper-foo supports.
 *
 * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime.
 * It also allows you to pass in a `asCallsOnlyArg` boolean. This gives you the options to reduce
 * the size of the metadata passed in to only include the calls. This will overall reduce the size of the
 * unsigned transaction.
 */
export function getRegistry({
  specName,
  chainName,
  specVersion,
  metadataRpc,
  properties,
  asCallsOnlyArg
}: GetRegistryOpts): TypeRegistry {
  const registry = new TypeRegistry();
  registry.setKnownTypes({
    types,
  });

  return getRegistryBase({
    chainProperties: properties || KNOWN_CHAIN_PROPERTIES[specName],
    specTypes: getSpecTypes(registry, chainName, specName, specVersion),
    metadataRpc,
    asCallsOnlyArg
  });
}

import * as deeperMethods from './methods';

export const methods = {
  credit: deeperMethods.credit,
  deeperNode: deeperMethods.deeperNode,
  balances: deeperMethods.balances,
  micropayment: deeperMethods.micropayment,
  creditAccumulation: deeperMethods.creditAccumulation,
  evm: deeperMethods.evm,
}

export * from '@substrate/txwrapper-core';
