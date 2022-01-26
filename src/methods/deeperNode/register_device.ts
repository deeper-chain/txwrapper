import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';


export interface RegisterDeviceArgs extends Args {
    ip: string; // encrypted ip
    country: string // country code, CN, US ...
}

// Define the method
export function registerDevice(
    args: RegisterDeviceArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'registerDevice',
                pallet: 'deeperNode',
            },
            ...info,
        },
        options
    );
}