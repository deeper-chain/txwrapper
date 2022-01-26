import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';


export interface RegisterServerArgs extends Args {
    /**
     * number of eras of a server
     */
    durationEras: number;
}

// Define the method
export function registerServer(
    args: RegisterServerArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'registerServer',
                pallet: 'deeperNode',
            },
            ...info,
        },
        options
    );
}