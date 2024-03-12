import { writable } from 'svelte/store';
import { seafarers } from '../data';

export const seafarerList = writable(seafarers);