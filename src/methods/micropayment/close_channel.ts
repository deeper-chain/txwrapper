import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';


export interface CloseChannelArgs extends Args {
    accountId: string;
}

// Define the method
export function closeChannel(
    args: CloseChannelArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'closeChannel',
                pallet: 'micropayment',
            },
            ...info,
        },
        options
    );
}