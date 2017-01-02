//***************************************************************************
// Copyright 2007-2017 Universidade do Porto - Faculdade de Engenharia      *
// Laboratório de Sistemas e Tecnologia Subaquática (LSTS)                  *
//***************************************************************************
// This file is part of DUNE: Unified Navigation Environment.               *
//                                                                          *
// Commercial Licence Usage                                                 *
// Licencees holding valid commercial DUNE licences may use this file in    *
// accordance with the commercial licence agreement provided with the       *
// Software or, alternatively, in accordance with the terms contained in a  *
// written agreement between you and Universidade do Porto. For licensing   *
// terms, conditions, and further information contact lsts@fe.up.pt.        *
//                                                                          *
// European Union Public Licence - EUPL v.1.1 Usage                         *
// Alternatively, this file may be used under the terms of the EUPL,        *
// Version 1.1 only (the "Licence"), appearing in the file LICENCE.md       *
// included in the packaging of this file. You may not use this work        *
// except in compliance with the Licence. Unless required by applicable     *
// law or agreed to in writing, software distributed under the Licence is   *
// distributed on an "AS IS" basis, WITHOUT WARRANTIES OR CONDITIONS OF     *
// ANY KIND, either express or implied. See the Licence for the specific    *
// language governing permissions and limitations at                        *
// http://ec.europa.eu/idabc/eupl.html.                                     *
//***************************************************************************
// Author: Ricardo Martins                                                  *
//***************************************************************************

function Icons()
{
    this.m_icons = new Array();
    this.load('normal', 'images/icons/normal.png');
    this.load('unknown', 'images/icons/unknown.png');
    this.load('warning', 'images/icons/warning.png');
    this.load('fatal', 'images/icons/fatal.png');
    this.load('error', 'images/icons/error.png');
    this.load('led_on', 'images/leds/on.png');
    this.load('led_off', 'images/leds/off.png');
}

Icons.prototype.load = function(label, path)
{
    this.m_icons[label] = new Image();
    this.m_icons[label].src = path;
};

Icons.prototype.path = function(label)
{
    return this.m_icons[label].src;
};
