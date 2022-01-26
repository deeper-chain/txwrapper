import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';


export interface UnregisterServerArgs extends Args {
}

// Define the method
export function unregisterServer(
    args: UnregisterServerArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'unregisterServer',
                pallet: 'deeperNode',
            },
            ...info,
        },
        options
    );
}