/**
 * Accounts can be instantiated from simple, HD or the two hardware wallet
 * keyring types. Both simple and HD are treated as default but we do special
 * case accounts managed by a hardware wallet.
 */
export const KEYRING_TYPES = {
  LEDGER: 'Ledger Hardware',
  TREZOR: 'Trezor Hardware',
  LATTICE: 'Lattice Hardware',
};

/**
 * Used for setting the users preference for ledger transport type
 */
export const LEDGER_TRANSPORT_TYPES = {
  LIVE: 'ledgerLive',
  WEBHID: 'webhid',
  U2F: 'u2f',
};

export const LEDGER_USB_VENDOR_ID = '0x2c97';

export const WEBHID_CONNECTED_STATUSES = {
  CONNECTED: 'connected',
  NOT_CONNECTED: 'notConnected',
  UNKNOWN: 'unknown',
};

export const TRANSPORT_STATES = {
  NONE: 'NONE',
  VERIFIED: 'VERIFIED',
  DEVICE_OPEN_FAILURE: 'DEVICE_OPEN_FAILURE',
  UNKNOWN_FAILURE: 'UNKNOWN_FAILURE',
};
