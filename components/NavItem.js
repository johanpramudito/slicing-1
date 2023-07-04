import classnames from "classnames";
export default function NavItem({ href, scheme, children}) {
    const schemes = {
        light: 'text-white hover:text-[#FCE72D] hover:opacity-60',
        dark: 'text-black hover:text-[#FCE72D]'	
    }

    const pickedScheme = schemes[scheme] || schemes.light;

    return (
        <li>
            <a 
                href={href} 
                className={classnames('text-lg hover:text-opacity-100 transition text-opacity-60 font-semibold font-sourcesans', pickedScheme)}
            >
                {children}
            </a>
        </li>
    );
}