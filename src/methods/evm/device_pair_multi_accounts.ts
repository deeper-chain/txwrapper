import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface DevicePairMultiAccountsArgs extends Args {
    /**
     * account to receive credit data.
     */
     ethAddress: string;
    /**
     * credit data to set to this account.
     */
     ethSignature: string;
}

// Define the method
export function devicePairMultiAccounts(
    args: DevicePairMultiAccountsArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'devicePairMultiAccounts',
                pallet: 'evm',
            },
            ...info,
        },
        options
    );
}
