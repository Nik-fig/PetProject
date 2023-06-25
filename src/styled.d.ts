import 'styled-components';

import type {baseTheme} from './styles/theme'

type baseThemeType = typeof baseTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends baseThemeType {
    }
}