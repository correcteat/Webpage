import {createReader} from '@keystatic/core/reader';
import config from '../keystatic.config';

import type {Settings} from './site-types';
export type {Settings};

const fallback: Settings = {
  tilefono: '23940 72190',
  kinito: '6987246974',
  email: 'correcteat.nutrition@gmail.com',
  dieuthinsi: 'Λαγυνά, Θεσσαλονίκη',
  calcom: 'https://cal.com/ευδοξια-τσιτακη-mhw6ym',
  instagram: 'https://www.instagram.com/correct_eat/',
  linktree: 'https://linktr.ee/tsitaki_evdoxia',
  fotografia: null,
};

/** Διαβάζει τις Ρυθμίσεις που ορίζει η πελάτισσα από το admin. */
export async function getSettings(): Promise<Settings> {
  try {
    const reader = createReader(process.cwd(), config);
    const s = await reader.singletons.rythmiseis.read();
    if (!s) return fallback;
    return {
      tilefono: s.tilefono || fallback.tilefono,
      kinito: s.kinito || fallback.kinito,
      email: s.email || fallback.email,
      dieuthinsi: s.dieuthinsi || fallback.dieuthinsi,
      calcom: s.calcom || fallback.calcom,
      instagram: s.instagram || fallback.instagram,
      linktree: s.linktree || fallback.linktree,
      fotografia: s.fotografia ?? null,
    };
  } catch {
    return fallback;
  }
}
