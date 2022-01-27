import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface AddCreditByTrafficArgs extends Args {
    nonce: number;
    signature: string;
}

// Define the method
export function addCreditByTraffic(
    args: AddCreditByTrafficArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'addCreditByTraffic',
                pallet: 'creditAccumulation',
            },
            ...info,
        },
        options
    );
}