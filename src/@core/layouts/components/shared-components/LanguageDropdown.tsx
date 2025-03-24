import { useEffect } from 'react'
import Icon from 'src/@core/components/icon'
import { useTranslation } from 'react-i18next'
import OptionsMenu from 'src/@core/components/option-menu'
import { Settings } from 'src/@core/context/settingsContext'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
}

const LanguageDropdown = ({ settings, saveSettings }: Props) => {
  const { i18n } = useTranslation()
  const { layout } = settings

  const handleLangItemClick = async (lang: 'en' | 'vi') => {
    await i18n.changeLanguage(lang);
    saveSettings({ ...settings, direction: 'ltr' });
  }
  
  useEffect(() => {
    console.log('Current language:', i18n.language);
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);
  

  return (
    <OptionsMenu
      icon={<Icon icon='mdi:translate' />}
      menuProps={{ sx: { '& .MuiMenu-paper': { mt: 4, minWidth: 130 } } }}
      iconButtonProps={{ color: 'inherit', sx: { ...(layout === 'vertical' ? { mr: 0.75 } : { mx: 0.75 }) } }}
      options={[
        {
          text: 'English',
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === 'en',
            onClick: () => {
              handleLangItemClick('en')
              saveSettings({ ...settings, direction: 'ltr' })
            }
          }
        },
        {
          text: 'Vietnamese',
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === 'vi',
            onClick: () => {
              handleLangItemClick('vi')
              saveSettings({ ...settings, direction: 'ltr' })
            }
          }
        }
      ]}
    />
  )
}

export default LanguageDropdown
