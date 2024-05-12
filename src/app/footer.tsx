import Link from 'next/link'

interface SocialIconProps {
  link: string
  children: React.ReactNode
}

function SocialIcon({ children, link }: SocialIconProps): React.ReactElement {
  return (
    <Link
      href={link}
      className="flex items-center justify-center h-12 w-12 rounded-2xl border-2 border-border bg-background"
    >
      {children}
    </Link>
  )
}

interface MenuItemProps {
  link: string
  children: React.ReactNode
}

function MenuItem({ children, link }: MenuItemProps): React.ReactElement {
  return (
    <li className="flex text-base font-medium leading-none">
      <Link href={link}>{children}</Link>
    </li>
  )
}

export default function Footer(): Readonly<React.ReactElement> {
  return (
    <footer className="flex flex-col border-t border-border">
      <div className="flex flex-col gap-20 laptop:gap-0 laptop:flex-row px-5 laptop:px-0 container mx-auto py-28 laptop:py-40">
        <div className="flex laptop:w-1/2">
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <svg
                width="42"
                height="42"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.4727 26.1797C17.8334 24.4053 14.6462 24.6754 14.6444 27.0911C14.6371 37.1284 22.7679 45.2711 32.8052 45.2785C42.8424 45.2858 50.9852 37.1549 50.9925 27.1176C50.9943 24.699 47.8033 24.425 46.1594 26.1992C42.8369 29.7851 38.0859 32.0283 32.8118 32.0244C27.5377 32.0205 22.79 29.7705 19.4727 26.1797Z"
                  fill="black"
                />
                <ellipse
                  cx="6.77307"
                  cy="0.816453"
                  rx="6.77307"
                  ry="0.816453"
                  transform="matrix(0.999619 0.0275695 -0.0170244 0.999856 26.0566 13.0774)"
                  fill="black"
                />
                <ellipse
                  cx="13.4748"
                  cy="1.27004"
                  rx="13.4748"
                  ry="1.27004"
                  transform="matrix(0.999619 0.0275695 -0.0170244 0.999856 19.356 17.6145)"
                  fill="black"
                />
              </svg>
              <span className="text-xl font-bold leading-none">Weebo</span>
            </div>
            <p className="text-base font-medium leading-relaxed laptop:w-8/12 mt-4">
              Unlimited web design partner for growing startups, agency &
              enterprise.
            </p>

            <ul className="flex gap-4 mt-6">
              <SocialIcon link="https://linkedin.com/company/tryweebo">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon link="mailto:tryweebo@gmail.com">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00035 7L3.78154 7.81253C2.90783 8.39501 2.47097 8.68625 2.23422 9.13041C1.99747 9.57457 1.99923 10.0966 2.00273 11.1406C2.00696 12.3975 2.01864 13.6782 2.05099 14.9741C2.12773 18.0487 2.16611 19.586 3.29651 20.7164C4.42691 21.8469 5.98497 21.8858 9.10108 21.9637C11.0397 22.0121 12.9611 22.0121 14.8996 21.9637C18.0158 21.8858 19.5738 21.8469 20.7042 20.7164C21.8346 19.586 21.873 18.0487 21.9497 14.9741C21.9821 13.6782 21.9937 12.3975 21.998 11.1406C22.0015 10.0966 22.0032 9.57456 21.7665 9.13041C21.5297 8.68625 21.0929 8.39501 20.2191 7.81253L19.0003 7"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 10L8.91302 14.1478C10.417 15.0502 11.169 15.5014 12 15.5014C12.831 15.5014 13.583 15.0502 15.087 14.1478L22 10"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12V6C5 4.11438 5 3.17157 5.58579 2.58579C6.17158 2 7.11439 2 9 2H15C16.8856 2 17.8284 2 18.4142 2.58579C19 3.17157 19 4.11438 19 6V12"
                    stroke="#141B34"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9.76124 6.27615C10.5657 5.81923 11.2679 6.00336 11.6897 6.29667C11.8626 6.41693 11.9491 6.47706 12 6.47706C12.0509 6.47706 12.1373 6.41693 12.3103 6.29667C12.7321 6.00336 13.4343 5.81923 14.2388 6.27615C15.2946 6.87582 15.5335 8.85412 13.0981 10.5232C12.6343 10.8411 12.4023 11 12 11C11.5976 11 11.3657 10.8411 10.9018 10.5232C8.46652 8.85412 8.70543 6.87582 9.76124 6.27615Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon link="https://twitter.com/tryweebo">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 21L10.5484 13.4516M10.5484 13.4516L3 3H8L13.4516 10.5484M10.5484 13.4516L16 21H21L13.4516 10.5484M21 3L13.4516 10.5484"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon link="https://youtube.com/@tryweebo">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon link="https://facebook.com/tryweebo">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </SocialIcon>
            </ul>
          </div>
        </div>

        <div className="flex laptop:w-1/2">
          <div className="grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-5 gap-y-16 w-full">
            <div className="flex flex-col gap-8">
              <h4 className="text-lg leading-none font-bold">Company</h4>
              <ul className="flex flex-col gap-6">
                <MenuItem link="/about">About</MenuItem>
                <MenuItem link="/about">Contact</MenuItem>
                <MenuItem link="/about">Works</MenuItem>
                <MenuItem link="/about">Services</MenuItem>
                <MenuItem link="/about">Pricing & plan</MenuItem>
                <MenuItem link="/about">Offers</MenuItem>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="text-lg leading-none font-bold">Learn & Grow</h4>
              <ul className="flex flex-col gap-6">
                <MenuItem link="/about">Community</MenuItem>
                <MenuItem link="/about">Podcast</MenuItem>
                <MenuItem link="/about">Courses</MenuItem>
                <MenuItem link="/about">Newsletter</MenuItem>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="text-lg leading-none font-bold">Resources</h4>
              <ul className="flex flex-col gap-6">
                <MenuItem link="/about">Shop</MenuItem>
                <MenuItem link="/about">Product</MenuItem>
                <MenuItem link="/about">Support</MenuItem>
                <MenuItem link="/about">FAQs</MenuItem>
                <MenuItem link="/about">Partners</MenuItem>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col tablet:flex-row tablet:justify-between px-5 laptop:px-16 py-8 border-t border-border gap-5 tablet:gap-0">
        <span className="font-medium">Copyright 2024 - Alright Reserved</span>
        <ul className="flex gap-5">
          <MenuItem link="/privacy">Privacy policy</MenuItem>
          <MenuItem link="/terms">Terms of use</MenuItem>
        </ul>
      </div>
    </footer>
  )
}
