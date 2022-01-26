import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';


export interface ImOnlineArgs extends Args {
    /**
     * current user
     */
    origin: string;
}

// Define the method
export function imOnline(
    args: ImOnlineArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'imOnline',
                pallet: 'deeperNode',
            },
            ...info,
        },
        options
    );
}