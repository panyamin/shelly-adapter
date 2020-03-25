/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

import { Property, Device } from 'gateway-addon';

export class PowerProperty extends Property {
    constructor(device: Device, name: string) {
        super(device, name, {
            '@type': 'InstantaneousPowerProperty',
            type: 'number',
            unit: 'watt',
            title: 'Power',
        });

        device.properties.set(name, this);
    }
}
