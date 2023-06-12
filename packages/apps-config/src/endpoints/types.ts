// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type React from 'react';
import type { HexString } from '@polkadot/util/types';
import type { Option } from '../settings/types.js';

interface BaseOption {
  dnslink?: string;
  genesisHash?: HexString;
  homepage?: string;
  paraId?: number;
  summary?: string;
  teleport?: number[];
  ui: {
    color?: string;
    logo?: string;
  }
}

export interface EndpointOption extends BaseOption {
  isChild?: boolean;
  isDevelopment?: boolean;
  isDisabled?: boolean;
  isUnreachable?: boolean;
  linked?: EndpointOption[];
  info?: string;
  providers: Record<string, string>;
  text: string;
}

export interface LinkOption extends BaseOption, Option {
  genesisHashRelay?: HexString;
  isChild?: boolean;
  isDevelopment?: boolean;
  isLightClient?: boolean;
  isRelay?: boolean;
  isUnreachable?: boolean;
  isSpaced?: boolean;
  linked?: LinkOption[];
  textBy: string;
  textRelay?: React.ReactNode;
  value: string;
  valueRelay?: string[];
}
