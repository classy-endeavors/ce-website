"use client";

import { ExternalLink, Globe, ChevronDown } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizable-navbar";
import { useState, createContext, useContext, useEffect, useRef } from "react";
import { Button } from "../ui/moving-border";
import Link from "next/link";
import { translations } from "@/lib/translations"; 

const LanguageContext = createContext({
  currentLanguage: 'en',
  setLanguage: (lang: string) => { },
  t: (key: string) => key
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang);
    }
  };

  const t = (key: string) => {
    return translations[currentLanguage as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferred-language');
      if (savedLang && translations[savedLang as keyof typeof translations]) {
        setCurrentLanguage(savedLang);
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const CustomDropdown = ({ children, trigger, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Content */}
          <div className={`absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 ${className}`}>
            {children({ closeDropdown: () => setIsOpen(false) })}
          </div>
        </>
      )}
    </div>
  );
};

const Header = () => {
  const { t, currentLanguage, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: t("english"), flag: '🇺🇸' },
    { code: 'fr', name: t("french"), flag: '🇫🇷' },
    { code: 'nl', name: t("dutch"), flag: '🇳🇱' },
    { code: 'es', name: t("spanish"), flag: '🇪🇸' },
    { code: 'de', name: t("german"), flag: '🇩🇪' },
  ];

  const getCurrentLanguageName = () => {
    const current = languages.find(lang => lang.code === currentLanguage);
    return current ? `${current.flag} ${current.name}` : '🇺🇸 English';
  };

  const navItems = [
    { name: t("aboutUs"), link: "/about-us" },
    {
      name: t("services"),
      link: "#services",
    },
    { name: t("industries"), link: "#industries" },
    { name: t("blogs"), link: "https://blog.classyendeavors.com/" },
  ];

  const handleLanguageSelect = (languageCode, closeDropdown) => {
    setLanguage(languageCode);
    closeDropdown();
  };

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <Button
            asChild
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 z-30 md:text-sm text-xs font-semibold rounded-full md:px-4 md:py-2"
          >
            <Link href="#contact" className="flex items-center gap-2">
              {t("contactUs")}
              <ExternalLink className="text-primary w-4 h-4" />
            </Link>
          </Button>

          {/* Desktop Language Dropdown */}
          <CustomDropdown
            className="w-48"
            trigger={
              <button className="text-foreground z-30 md:text-base text-xs font-semibold md:py-2 flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <Globe className="w-4 h-4" />
                <span className="hidden md:inline">{getCurrentLanguageName()}</span>
                <span className="md:hidden">{languages.find(lang => lang.code === currentLanguage)?.flag || '🇺🇸'}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            }
          >
            {({ closeDropdown }) => (
              <div className="py-2">
                <div className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                  {t("language")}
                </div>
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language.code, closeDropdown)}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors ${
                      currentLanguage === language.code
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                    {currentLanguage === language.code && (
                      <span className="ml-auto text-primary">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </CustomDropdown>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-foreground"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <Button
              asChild
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 z-30 md:text-base text-xs font-semibold rounded-full md:px-4 md:py-2 w-full"
            >
              <Link href="#contact" className="flex items-center justify-center gap-2">
                {t("contactUs")}
                <ExternalLink className="text-primary w-4 h-4" />
              </Link>
            </Button>

            {/* Mobile Language Selector */}
            <CustomDropdown
              className="w-48"
              trigger={
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 z-30 text-xs font-semibold rounded-full px-4 py-2 w-full flex items-center justify-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>{getCurrentLanguageName()}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              }
            >
              {({ closeDropdown }) => (
                <div className="py-2">
                  <div className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                    {t("language")}
                  </div>
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setLanguage(language.code);
                        setIsMobileMenuOpen(false);
                        closeDropdown();
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors ${
                        currentLanguage === language.code
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                      {currentLanguage === language.code && (
                        <span className="ml-auto text-primary">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </CustomDropdown>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;