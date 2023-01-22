import { Button, Center, HStack, Stack, Tooltip, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Configuration, SkillStyles } from './_app'

function Feature({ IsChecked, children }: {
  IsChecked: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className='py-2'>
      <Image src={IsChecked ? "/Check.svg" : "/Dismiss.svg"} width="18rem" height="18rem" alt="" className='inline' />
      <div className='inline pl-1'>
        {children}
      </div>
    </div>
  )
}

function capitalizeFirstLetter(string: String) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Home: NextPage = () => {
  return (
    <div className="text-center">
      <header>
        <Center>
          {Configuration.NavigationLinks != null && Configuration.NavigationLinks.map(e => (
            <a href={e.URL} className={`pt-5 px-2 hover:opacity-75 ${Configuration.LinkStyle}`}>
              {
                e.Icon != null &&
                <img
                  src={e.Icon}
                  width="35rem"
                  height="35rem"
                  alt="Link Icon"
                  className={(e.Name != null ? "mr-2 inline" : "")}
                />
              }
              {e.Name}
            </a>
          ))}
        </Center>
      </header>
      <main className="main">
        {
          Configuration.Avatar != null &&
          <img
            src={Configuration.Avatar}
            alt="Avatar"
            width="100rem"
            height="100rem"
            className="rounded-full !border-[#a9ba84] !border-2 border-solid"
          />
        }
        <h1 className="font-bold text-3xl mt-5">
          {Configuration.Name}<span className="DiscordTag">{Configuration.DiscordTag}</span>
        </h1>
        <hr className='mt-5 w-[30rem]' />

        <div className='pt-5'>
          <h2 className='uppercase font-bold text-lg'>About Me</h2>
          <p className="text-xl pt-2 max-w-sm">
            {Configuration.Description}
          </p>
        </div>

        <div>
          <h2 className='uppercase font-bold pt-5 text-lg'>Where you can find me</h2>
          <div className='pt-2 FlexContainer'>
            {Configuration.Links != null && Configuration.Links.map(e => (
              <a href={e.URL} className={`py-2 hover:opacity-75 FlexItem ${Configuration.LinkStyle}`}>
                {
                  e.Icon != null &&
                  <img
                    src={e.Icon}
                    width="20rem"
                    height="20rem"
                    alt="Link Icon"
                    className={e.Name != null ? "mr-2 inline" : ""}
                  />
                }
                {e.Name}
              </a>
            ))}
          </div>
        </div>

        {
          Configuration.Skills != null &&
          (
            <div className='pt-5'>
              <h2 className='uppercase font-bold text-lg'>My Skills</h2>
              <div className={`${Configuration.SkillStyle}`}>
                <Center>
                  {
                    (Configuration.SkillStyle == null ? false : Configuration?.SkillStyle.length > 0) ? (
                      <div className='pt-3 FlexContainer2'>
                        {Configuration.Skills.map(e => {
                          const _IconName = (e.substring(7, e.length).replace("-Dark", "").replace(".svg", "").toLowerCase());
                          const Names = {
                            stackoverflow: "Stack Overflow",
                            vscode: "Visual Studio Code",
                            visualstudio: "Visual Studio",
                            html: "HTML",
                            css: "CSS",
                            expressjs: "Express.js",
                            nextjs: "Next.js",
                            nodejs: "Node.js",
                            discordbots: "Discord Bots"
                          } satisfies Record<string, string>;
                          //@ts-expect-error
                          const IconName = Names[_IconName] != null ? Names[_IconName] : capitalizeFirstLetter(_IconName);
                          const URL = "https://skillicons.dev/icons?i=" + (e.substring(7, e.length).replace("-Dark", "").replace(".svg", "").toLowerCase())
                          return <Tooltip label={IconName} placement='top' bg="#0c0d0f" borderRadius={6}>
                            <img src={URL} className="mx-1 my-1 FlexItem2 w-1" alt={IconName} />
                          </Tooltip>
                        })}
                      </div>
                    ) : (
                      <Center className='mt-2'>
                        {Configuration.Skills.map(e => {
                          const Name = (e.substring(7, e.length).replace("-Dark", "").replace(".svg", ""));
                          return (
                            <div className='Role rounded-[.3rem] w-24 mx-1 py-1'>
                              <Center>
                                <img src={e} className="w-5 inline hover:opacity-75 cursor-pointer" />
                                <div className='inline ml-2'>
                                  {Name}
                                </div>
                              </Center>
                            </div>
                          )
                        })}
                      </Center>
                    )
                  }
                </Center>
              </div>
            </div>
          )
        }

        <div className='pt-5'>
          <h2 className='uppercase font-bold text-lg'>What I do</h2>
          <div className="gridDisplay">
            {Configuration?.Sections && Configuration.Sections.map(e => (
              <a href={e.Link}>
                <div className={`px-20 py-5 card text-center ${e.Interactable && "ActiveCard"}`}>
                  {
                    e.Icon != null && (
                      e.IconBackground == true ? (
                        <Center className='pb-5'>
                          <div className={e.IconBackground == true ? `bg-gray-600 rounded-full w-[${"4rem"}] h-[${"4rem"}] py-4` : ""}>
                            <Center className='justify-center flex align-middle items-center Center'>
                              <img
                                src={e.Icon}
                                alt="Card Icon"
                                width={e.Size ?? "38rem"}
                                height={e.Size ?? "38rem"}
                                className={`${e.IconRounded}`}
                              />
                            </Center>
                          </div>
                        </Center>
                      ) : (
                        <div className='pb-3'>
                          <Center>
                            <img
                              src={e.Icon}
                              alt="Card Icon"
                              width={e.Size ?? "50rem"}
                              height={e.Size ?? "50rem"}
                              className={`${e.IconRounded} mt-4`}
                            />
                          </Center>
                        </div>
                      )
                    )
                  }
                  {e.Emoji != null && <h2>{e.Emoji}</h2>}
                  <h2 className='font-semibold'>{e.Title}</h2>
                  <p>{e.Description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer pt-5">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
