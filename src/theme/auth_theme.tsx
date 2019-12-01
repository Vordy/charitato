/**
 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

import { Colors } from './Colors'
import { getTheme } from './themes'

export const Container = {
    fontFamily: 'Helvetica Nueue, roboto, Arial, Helvetica, sans-serif',
}
export const FormContainer = {}
export const FormSection = {}
export const FormField = {}
export const SectionHeader = {}
export const SectionBody = {}
export const SectionFooter = {}
export const SectionFooterPrimaryContent = {}
export const SectionFooterSecondaryContent = {}
export const Input = {}
export const Button = {
    backgroundColor: Colors.Rose,
    borderColor: Colors.Rose,
    borderRadius: '25px',
    fontWeight: 850,
}
export const PhotoPickerButton = {}
export const PhotoPlaceholder = {}
export const SignInButton = {}
export const SignInButtonIcon = {}
export const SignInButtonContent = {}
export const Strike = {}
export const StrikeContent = {}
export const ActionRow = {}
export const FormRow = {}
export const A = {
    color: Colors.Rose,
}
export const Hint = {}
export const Radio = {}
export const Label = {}
export const InputLabel = {}
export const AmazonSignInButton = {}
export const FacebookSignInButton = {}
export const GoogleSignInButton = {}
export const OAuthSignInButton = {}
export const Toast = {}
export const NavBar = {
    backgroundColor: getTheme().background,
    border: 'none',
    color: getTheme().foreground,
    position: 'absolute',
    right: '0',
    top: '0',
}
export const NavRight = {}
export const Nav = {}
export const NavItem = {}
export const NavButton = {
    backgroundColor: Colors.Rose,
    borderRadius: '25px',
}

const AmplifyTheme = {
    a: A,
    actionRow: ActionRow,
    amazonSignInButton: AmazonSignInButton,
    button: Button,
    container: Container,
    facebookSignInButton: FacebookSignInButton,
    formContainer: FormContainer,
    formField: FormField,
    formRow: FormRow,
    formSection: FormSection,
    googleSignInButton: GoogleSignInButton,
    hint: Hint,
    input: Input,
    inputLabel: InputLabel,
    label: Label,
    nav: Nav,
    navBar: NavBar,
    navButton: NavButton,
    navItem: NavItem,
    navRight: NavRight,
    oAuthSignInButton: OAuthSignInButton,
    photoPickerButton: PhotoPickerButton,
    photoPlaceholder: PhotoPlaceholder,
    radio: Radio,
    sectionBody: SectionBody,
    sectionFooter: SectionFooter,
    sectionFooterPrimaryContent: SectionFooterPrimaryContent,
    sectionFooterSecondaryContent: SectionFooterSecondaryContent,
    sectionHeader: SectionHeader,
    signInButton: SignInButton,
    signInButtonContent: SignInButtonContent,
    signInButtonIcon: SignInButtonIcon,
    strike: Strike,
    strikeContent: StrikeContent,
    toast: Toast,
}

export default AmplifyTheme
