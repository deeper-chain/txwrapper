import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';


export interface UnregisterDeviceArgs extends Args {
}

// Define the method
export function unregisterDevice(
    args: UnregisterDeviceArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'unregisterDevice',
                pallet: 'deeperNode',
            },
            ...info,
        },
        options
    );
}