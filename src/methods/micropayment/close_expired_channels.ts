import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';


export interface CloseExpiredChannelsArgs extends Args {
}

// Define the method
export function closeExpiredChannels(
    args: CloseExpiredChannelsArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'closeExpiredChannels',
                pallet: 'micropayment',
            },
            ...info,
        },
        options
    );
}