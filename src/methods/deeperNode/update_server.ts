import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';


export interface UpdateServerArgs extends Args {
    /**
     * number of eras of a server
     */
    durationEras: number;
}

// Define the method
export function updateServer(
    args: UpdateServerArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'updateServer',
                pallet: 'deeperNode',
            },
            ...info,
        },
        options
    );
}