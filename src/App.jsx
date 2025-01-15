import './App.css'
import { Theme } from './projects/project-example/theme'


export const App = () => {
    return (
    <div className={'container'}>
      <Theme name={'Sunny'}
             description={'A marketplace theme for smart users'}
             link={'https://classifieds.demoflynax.com/?template=general_sunny'}
             image={'https://www.flynax.com/files/tpl_thumbnails/general/general_sunny.webp'}
             blocked={false}
      />
        <Theme name={'Nova'}
               description={'A Nova theme like super nova star'}
               link={'https://realty.demoflynax.com/?template=realty_nova_map'}
               image={'https://www.flynax.com/files/tpl_thumbnails/realty/realty_nova_map.webp'}
               blocked={true}
        />
        <Theme name={'Rainbow'}
               description={'A Rainbow theme shines like rainbow'}
               link={'https://classifieds.demoflynax.com/?template=general_rainbow'}
               image={'https://www.flynax.com/files/tpl_thumbnails/general/general_rainbow.webp'}
               blocked={true}
        />
    </div>
  )
}

