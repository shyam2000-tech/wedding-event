/**
 * Wedding Event Visual Assets
 * Centralized Vite asset imports for high-resolution photography.
 * Using explicit imports ensures Vite properly hashes, bundles, and emits
 * assets into the production distribution build (/dist/assets).
 */

import heroBanner from './images/wedding_hero_banner_1794382173720.jpg';
import couplePortrait from './images/wedding_couple_portrait_1794382176446.jpg';
import planningDetail from './images/wedding_planning_detail_1794382176416.jpg';
import decorReception from './images/wedding_decor_reception_1794382174541.jpg';
import mandapStage from './images/wedding_mandap_stage_1794382176009.jpg';
import cateringChampagne from './images/wedding_catering_champagne_1794382177622.jpg';

export const weddingImages = {
  heroBanner,
  couplePortrait,
  planningDetail,
  decorReception,
  mandapStage,
  cateringChampagne,
} as const;

export default weddingImages;
