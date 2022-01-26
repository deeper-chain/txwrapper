import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';


export interface OpenChannelArgs extends Args {
    server: string;
    lockAmount: number;
    /**
     * duration is in seconds
     */
    duration: number;
}

// Define the method
export function openChannel(
    args: OpenChannelArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'openChannel',
                pallet: 'micropayment',
            },
            ...info,
        },
        options
    );
}