import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.jpg';
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from '../ui/sidebar';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';


const Navbar = () => {
  return (
    <div className='hidden md:block bg-[#4A4894] '>
      <div className=' flex flex-col  gap-2  '>
        <div className="flex h-16 items-center px-4 lg:h-[64px] lg:px-6">
          <a className="flex items-center gap-2 font-semibold" href="/home">
            <img src={Logo} alt="Logo" width="50" height="50" />
          </a>
        </div>

        <div className="flex-1">
          <nav className='grid items-start px-2 text-sm font-medium text-white'>
            <div>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  ` ${isActive
                    ? 'flex items-center gap-3 py-4  border-l-4 border-l-[#FFCC02] pl-2  bg-[#908ed3]'
                    : 'flex items-center gap-3 py-4'
                  }`
                }
              >
                IAA
              </NavLink>
            </div>

            <div>
              <NavLink
                to="/hall-booking"
                className={({ isActive }) =>
                  ` ${isActive
                    ? 'flex items-center gap-3 py-4  border-l-4 border-l-[#FFCC02] pl-2  bg-[#908ed3]'
                    : 'flex items-center gap-3 py-4 '
                  }`
                }
              >
                Hall Booking
              </NavLink>
            </div>
            <div className='w-full'>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                      Master Tables
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <NavLink
                        to="/user"
                        className={({ isActive }) =>
                          ` ${isActive
                            ? 'flex items-center gap-3 py-4 border-l-4 border-l-[#FFCC02] pl-2 w-3/4 bg-[#908ed3]'
                            : 'flex items-center gap-3  '
                          }`
                        }
                      >
                        User
                      </NavLink>
                    </SidebarGroupContent>
                    <SidebarGroupContent>
                      <NavLink
                        to="/role"
                        className={({ isActive }) =>
                          ` ${isActive
                            ? 'flex items-center gap-3 py-4 border-l-4 border-l-[#FFCC02] pl-2 w-3/4 bg-[#908ed3]'
                            : 'flex items-center gap-3  '
                          }`
                        }
                      >
                        Role
                      </NavLink>
                    </SidebarGroupContent>
                    <SidebarGroupContent>
                      <NavLink
                        to="/loan-type"
                        className={({ isActive }) =>
                          ` ${isActive
                            ? 'flex items-center gap-3 py-4 border-l-4 border-l-[#FFCC02] pl-2 w-3/4 bg-[#908ed3]'
                            : 'flex items-center gap-3  '
                          }`
                        }
                      >
                        Loan Type
                      </NavLink>
                    </SidebarGroupContent>
                    <SidebarGroupContent>
                      <NavLink
                        to="/arbitrator"
                        className={({ isActive }) =>
                          ` ${isActive
                            ? 'flex items-center gap-3 py-4 border-l-4 border-l-[#FFCC02] pl-2 w-3/4 bg-[#908ed3]'
                            : 'flex items-center gap-3  '
                          }`
                        }
                      >
                        Arbitrator
                      </NavLink>
                    </SidebarGroupContent>
                    <SidebarGroupContent>
                      <NavLink
                        to="/customer"
                        className={({ isActive }) =>
                          ` ${isActive
                            ? 'flex items-center gap-3 py-4 border-l-4 border-l-[#FFCC02] pl-2 w-3/4 bg-[#908ed3]'
                            : 'flex items-center gap-3  '
                          }`
                        }
                      >
                        Customer
                      </NavLink>
                    </SidebarGroupContent>
                    <SidebarGroupContent>
                      <NavLink
                        to="/hall"
                        className={({ isActive }) =>
                          ` ${isActive
                            ? 'flex items-center gap-3 py-4 border-l-4 border-l-[#FFCC02] pl-2 w-3/4 bg-[#908ed3]'
                            : 'flex items-center gap-3  '
                          }`
                        }
                      >
                        Hall
                      </NavLink>
                    </SidebarGroupContent>

                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>

              <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                      Reports
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <NavLink
                        to="/iaa-report"
                        className={({ isActive }) =>
                          ` ${isActive
                            ? 'flex items-center gap-3 py-4 border-l-4 border-l-[#FFCC02] pl-2 w-3/4 bg-[#908ed3]'
                            : 'flex items-center gap-3  '
                          }`
                        }
                      >
                        IAA Reports
                      </NavLink>
                    </SidebarGroupContent>

                    <SidebarGroupContent>
                      <NavLink
                        to="/hall-report"
                        className={({ isActive }) =>
                          ` ${isActive
                            ? 'flex items-center gap-3 py-4 border-l-4 border-l-[#FFCC02] pl-2 w-3/4 bg-[#908ed3]'
                            : 'flex items-center gap-3  '
                          }`
                        }
                      >
                        Hall Booking Reports
                      </NavLink>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
